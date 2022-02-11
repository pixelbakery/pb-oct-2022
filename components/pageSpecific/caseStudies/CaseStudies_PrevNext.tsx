import PageSection from '@parts/PageSection'
import allProjects from '@data/portfolio'
import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
import { ChevronRightIcon } from '@images/UI_Icons'
function CaseStudies_PrevNext({ title }) {
  console.log(title)

  const index = allProjects.findIndex(
    (project) => project.title.toLowerCase() === title.toLowerCase(),
  )
  console.log(index)
  const getPrev = (i) => {
    if (i === 0) {
      return allProjects.at(-1)
    } else {
      return allProjects[i - 1]
    }
  }

  const getNext = (i) => {
    if (i === allProjects.length - 1) {
      return allProjects[0]
    } else {
      return allProjects[i + 1]
    }
  }

  const prev = getPrev(index)
  const next = getNext(index)

  return (
    <PageSection className='bg-pink-light py-2'>
      <InnerWrapper className='py-2 my-2'>
        <div className='flex justify-between'>
          <Link href={prev.slug}>
            <a className='flex'>
              <div className='w-20 text-peach rotate-180'>
                <ChevronRightIcon />
              </div>
              <div className='self-center'>
                <p className='text-wine-400 font-medium text-md leading-none mb-1'>{prev.client}</p>

                <p className='text-peach font-semibold text-xl leading-none mt-1'>{prev.title}</p>
              </div>
            </a>
          </Link>

          <Link href={next.slug}>
            <a className='flex justify-end'>
              <div className='self-center'>
                <p className='text-wine-400 font-medium text-md leading-none mb-1'>{next.client}</p>

                <p className='text-peach font-semibold text-xl leading-none mt-1'>{next.title}</p>
              </div>
              <div className='w-20 text-peach '>
                <ChevronRightIcon />
              </div>
            </a>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_PrevNext