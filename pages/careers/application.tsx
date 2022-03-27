import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'
import Lead from '@typography/Lead'
import Careers_Application_Form from '@careers/Careers_Application_Form'

// get job posts for position titles
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import { NextSeo } from 'next-seo'

function Careers_Application({ allJobs }) {
  return (
    <Main>
      <NextSeo
        noindex={true}
        title='Pixel Bakery – Careers – Application'
        description={
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
        }
        openGraph={{
          url: `https://pixelbakery.com/careers/application`,
          title: 'Pixel Bakery | About',
          description:
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
        }}
      />
      <PageHeader_VarH header='Application' subheader='get at it' />
      <PageSection>
        <InnerWrapper>
          <H2AndLead
            headerText={"we're always looking for new bakers"}
            leadText={'Come rise with us'}
          />
          <Lead>That was a pun. A large part of your job here will be writing puns.</Lead>
          <p>Okay, let’s get to know you a bit.</p>
        </InnerWrapper>
        <InnerWrapper>
          <Careers_Application_Form allJobs={allJobs} />
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}
export default Careers_Application
export function getStaticProps() {
  const allJobs = jobFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(JOBS_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allJobs } }
}
