import Image from 'next/image'
import Vimeo from '@u-wave/react-vimeo'

import PropTypes from 'prop-types'
import Link from 'next/link'
SolaTinyChef_Header.propTypes = {
  client: PropTypes.string.isRequired,
  projectName: PropTypes.string,
  projectExcerpt: PropTypes.string,
  heroVideo: PropTypes.string,
  clientLogo: PropTypes.string.isRequired,
  projectSubhead: PropTypes.string.isRequired,
  projectIntroduction: PropTypes.string,
}

function SolaTinyChef_Header({ ...props }) {
  return (
    <section className='pb-12 px-6 md:px-8 pt-40 pt-lg:pt-48  my-4  bg-white' id='topOfPage'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-6'>
          <div className='font-extrabold text-pink text-2xl mb-0 pb-0'>{props.client}</div>
          <h1 className='text-blue-dark text-6xl leading-none mb-5 mt-0 pt-0'>
            {props.projectName}
          </h1>
          <p className='py-6 text-wine text-xl max-w-xs font-medium text-opacity-50'>
            {props.projectExcerpt}
          </p>
          <Link href={'/work'}>
            <a className='text-blue text-md text-opacity-90 hover:text-opacity-75 pb-1 border-b border-b-blue'>
              ← back to all case studies
            </a>
          </Link>
        </div>
        <div className='relative block -mx-6 md:mx-0'>
          <Vimeo video={props.heroVideo} autoplay={false} showPortrait responsive={true} />
        </div>
      </div>
    </section>
  )
}
export default SolaTinyChef_Header
