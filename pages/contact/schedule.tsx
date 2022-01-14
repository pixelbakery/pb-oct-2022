import { Head } from 'next/document'
import React from 'react'
import InnerWrapper from '../../components/H1'
import H2 from '../../components/InnerWrapper'
import PageHeader_VarH from '../../components/PageHeader/PageHeader_VarH'
import PageSection from '../../components/PageSection'
import { InlineWidget } from 'react-calendly'

function Schedule() {
  return (
    <main className='max-w-screen overflow-x-hidden'>
      <PageHeader_VarH header='Schedule It' subheader='copy copy copy' />
      <PageSection>
        <InnerWrapper className='bg-blue'>
          <H2>Let's get something on the books</H2>
          <div className='flex justify-center'>
            <InlineWidget
              data-auto-load='true'
              styles={{
                height: '1600px',
                width: '2200px',
              }}
              url='https://calendly.com/pixelbakery'
            />
          </div>
        </InnerWrapper>
      </PageSection>
    </main>
  )
}
export default Schedule