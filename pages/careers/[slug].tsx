//react imports
import { ReactElement, useState } from 'react'

//MDX & frontmatter imports
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

//nextJS imports
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import { InnerWrapper, PageSection, Button_Filled } from '@parts/index'

import { H1, H2AndLead } from '@typography/index'

import DateFormatter from '@lib/dateFormatter'

//css imports
import markdownStyles from '@styles/markdown-styles.module.css'
import Careers_SEO from '@careers/Careers_Post_SEO'
import dayjs from 'dayjs'
import Layout_Defaualt from 'components/layouts/Layout_Default'

const components = {
  Head,
}
const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX

function Page_JobPosting({ slug, source, frontMatter }) {
  const [coverImage] = useState(handleCoverImage())
  function handleCoverImage() {
    if (frontMatter.coverImage != undefined) {
      return `${frontMatter.coverImage}`
    } else {
      return `/img/pixel-bakery-samee-dan-1200x900.png`
    }
  }
  const datePostedISO = dayjs(frontMatter.date).toISOString()
  const dateExpiredISO = dayjs(datePostedISO).add(2, 'month').toISOString()
  return (
    <>
      <Careers_SEO
        datePostedISO={datePostedISO}
        dateExpiredISO={dateExpiredISO}
        title={frontMatter.title}
        commitment={frontMatter.commitment}
        coverImage={coverImage}
        slug={slug}
      />

      <PageSection className='min-h-screen mt-32' id='job-posting'>
        <article>
          <InnerWrapper>
            <header className='max-w-2xl mx-auto'>
              <div className='pb-12'>
                <Link
                  hrefLang={'en-US'}
                  href='/careers'
                  className='pb-1 border-b-2 border-b-blue text-blue'
                >
                  ← back to all careers
                </Link>
              </div>
              <p className='py-0 my-0 text-4xl font-extrabold leading-none text-peach'>
                job position
              </p>
              <H1 color='blue' className='text-6xl text-blue'>
                {frontMatter.title}
              </H1>
              <div className='mx-auto  md:max-w-6xl'>
                <div className='w-full mx-auto mb-24 aspect-w-4 aspect-h-3 bg-peach'>
                  <Image
                    fill={true}
                    className='object-cover object-center w-full h-full'
                    src={`${ImgPrefix}${coverImage}`}
                    alt={`Pixel Bakery is hiring a ${frontMatter.commitment} ${frontMatter.title}`}
                  />
                </div>
              </div>
              {!frontMatter.active ? (
                <p className='text-2xl italic font-bold '>Sorry, this position has been filled.</p>
              ) : (
                ''
              )}
              <p className='pt-0 mt-0 text-sm italic'>
                posted on <DateFormatter dateString={frontMatter.date} />:
              </p>
            </header>
          </InnerWrapper>

          <InnerWrapper>
            <div className='max-w-2xl mx-auto'>
              <div className={markdownStyles['markdown']}>
                <MDXRemote {...source} components={components} />
              </div>
              {!frontMatter.active ? (
                ''
              ) : (
                <div className='flex flex-col justify-center mt-32'>
                  <H2AndLead
                    headerColor='blue-dark'
                    leadColor='peach'
                    headerText={'Does that sound like you?'}
                    leadText={'great, get at it.'}
                  />
                  <Button_Filled
                    text='apply for position'
                    bgColor={'pink'}
                    textColor={'pink-lighter'}
                    chevronDirection='right'
                    link={'/careers/application'}
                    center={false}
                  />
                </div>
              )}
              <div className='pt-12'>
                <Link
                  hrefLang={'en-US'}
                  href='/careers'
                  className='pb-1 border-b-2 text-blue border-b-blue'
                >
                  ← back to all careers
                </Link>
              </div>
            </div>
          </InnerWrapper>
        </article>
      </PageSection>
    </>
  )
}
//Set page layout
Page_JobPosting.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}

export default Page_JobPosting
export const getStaticProps = async ({ params }) => {
  //MDX Stuff
  const jobsFilePath = path.join(JOBS_PATH, `${params.slug}.mdx`.toString())
  const source = fs.readFileSync(jobsFilePath)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
      development: process.env.NODE_ENV === 'development',
    },
    scope: data,
  })
  data.date = JSON.parse(JSON.stringify(data.date))
  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = jobFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
