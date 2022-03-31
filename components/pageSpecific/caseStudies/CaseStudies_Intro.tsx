import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'

import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'
import H2AndLead from '@typography/H2AndLead'
import Lead from '@typography/Lead'
export default function CaseStudiesIntro({ children, ...props }) {
  return (
    <PageSection className={cn('lg:py-12')}>
      <InnerWrapper className={cn('flex justify-center')}>
        <article className='grid grid-cols-1 lg:grid-cols-5 gap-x-16 xl:gap-x-24'>
          {/* <div className='col-span-1 lg:col-span-5 flex justify-center'>
            <Link href={props.url} passHref>
              <a
                rel='noOpener'
                className='block relative self-start  w-32 h-32 xl:w-40 xl:h-40 opacity-75 cursor-pointer hover:opacity-60 mb-24'
              >
                <Image
                  src={`/img/clients/${props.logo}`}
                  layout='fill'
                  objectFit='contain'
                  placeholder='blur'
                  blurDataURL={`/img/clients/${props.logo}`}
                  alt={`logo for ${props.client}`}
                  className={'hover:opacity-50 duration-300'}
                />
              </a>
            </Link>
          </div> */}
          <div className='col-span-1 lg:col-span-2 mt-3'>
            <Lead color={'blue'}>{props.title}</Lead>
          </div>

          <div className='col-span-1 lg:col-span-3  text-left text-lg mt-0 pt-0'>{children}</div>
        </article>
      </InnerWrapper>
    </PageSection>
  )
}
