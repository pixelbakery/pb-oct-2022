import dynamic from 'next/dynamic'

import Lottie_VideoProduction from '@data/lottie_services/lottie_services_videoProduction.json' assert { type: 'json' }

const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
})

import { Button_Outlined, PageSection_FullWidth } from '@parts'
import { H2 } from '@typography'

function ServicesOverview_VideoProduction() {
  return (
    <PageSection_FullWidth id='video-production'>
      <div className='grid gap-4 lg:grid-cols-2 '>
        <div className='flex flex-col justify-center px-12 py-12'>
          <H2 color='pink' className='mb-6 2xl:mb-10 '>
            Commercial Video Production
          </H2>
          <p>
            Video advertisements, TV commercials, YouTube pre-roll ads, online advertisements,
            digital campaigns. You name it. These are all great ways to give your brand more
            recognition and to boost your marketplace identity. With our experience in both video
            production and animation, there are no limits to what we can produce for your brand.
          </p>
          <Button_Outlined
            text={'Video Production Services'}
            link={'/services/video-production'}
            color={'pink'}
            chevronDirection='right'
          />
        </div>
        <div className='order-first h-full max-h-screen bg-pink lg:order-last'>
          <LottiePlayer anim={Lottie_VideoProduction} />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_VideoProduction
