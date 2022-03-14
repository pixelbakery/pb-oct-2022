import { getTodaysDate } from '@lib/helpers'
import mail from '@sendgrid/mail'
import { join } from 'path'
const busboy = require('busboy')

mail.setApiKey(process.env.SENDGRID_API_KEY)
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function sendJobApplication(req, res) {
  try {
    const { fields, files } = await parseReq(req)

    console.log({ fields, files })

    const resume = files.resume
    const tenMegabytes = 10 * 1000 * 1000
    if (Buffer.byteLength(resume.data) > tenMegabytes) {
      throw new Error('Resume is too large')
    }
    if (resume.mimeType !== 'application/pdf') {
      throw new Error('Resume must be a pdf')
    }
    await sendMail(fields, files)

    return res.status(200).json({ done: true })
  } catch (e) {
    console.error('error', e)
    return res.status(500).json({ done: true })
  }
}

function parseReq(req: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const fields = {}
    const files = {}
    const bb = busboy({ headers: req.headers })
    bb.on('file', (name, file, info) => {
      const { filename, encoding, mimeType, ...rest } = info
      let fileData = null
      file
        .on('data', (data) => {
          console.log(`File [${name}] got ${data.length} bytes`)
          if (fileData === null) {
            fileData = data
          } else {
            fileData = Buffer.concat([fileData, data])
          }
        })
        .on('close', () => {
          console.log(`File [${name}] done`)
          files[name] = {
            filename,
            encoding,
            mimeType,
            data: fileData,
          }
        })
    })
    bb.on('field', (name, val, info) => {
      fields[name] = val
    })
    bb.on('close', () => {
      console.log('Done parsing form!')
      resolve({ files, fields })
    })
    req.pipe(bb)
  })
}

async function sendMail(body: any, files: any) {
  const resume = files.resume
  const attachmentName = `${body.first_name}_${body.last_name}_${getTodaysDate()}_resume`

  await mail.send({
    to: `jordan@pixelbakery.com`,
    // to: 'henry.sipp@hey.com',
    from: {
      email: 'careers@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    subject: `Job Application: ${body.first_name} ${body.last_name} – ${body.position}`,
    templateId: 'd-9c9d902a4d9f49da8d65e2176f582f23',
    dynamicTemplateData: {
      about_personal: `${body.about_personal}`,
      about_professional: `${body.about_professional}`,
      address_line_1: `${body.address_line_1}`,
      address_line_2: `${body.address_line_2}`,
      authorized: `${body.authorized}`,
      band: `${body.band}`,
      commitment: `${body.commitment}`,
      education: `${body.education}`,
      email: `${body.email}`,
      first_name: `${body.first_name}`,
      hear: `${body.hear}`,
      hours: `${body.hours}`,
      last_name: `${body.last_name}`,
      middle_name: `${body.middle_name}`,
      pay: `${body.pay}`,
      phone_number: `${body.phone_number}`,
      position: `${body.position}`,
      pronoun: `${body.pronoun}`,
      social: `${body.social}`,
      website: `${body.website}`,
      why: `${body.why}`,
      zodiac: `${body.zodiac}`,
    },
    attachments: [
      {
        content: `${resume.data.toString('base64')}`,
        filename: `${attachmentName}.pdf`,
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
  })
}
