import { PageSection, InnerWrapper } from '@parts'
import { H2 } from '@typography'

import dynamic from 'next/dynamic'
import cn from 'classnames'
import { PrevButton, NextButton, SlideProgression } from '@parts/carousel/Carousel_Buttons'

import useEmblaCarousel from 'embla-carousel-react'
import { Fragment, useCallback, useEffect, useState } from 'react'

type CarouselProps = {
  slides: Array<any>
  aspectH?: string
  aspectW?: string
  objectFit?: any
  slideColor?: string
  textColor?: string
  diminsions?: Array<number>
  className?: string
}

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX

const NewCarousel = ({ slides, className }: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [emblaRef, embla] = useEmblaCarousel({ loop: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    {
      setSelectedIndex(embla.selectedScrollSnap())
      setPrevBtnEnabled(embla.canScrollPrev())
      setNextBtnEnabled(embla.canScrollNext())
    }
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (embla) {
      setScrollSnaps(embla.scrollSnapList())
      embla.on('select', onSelect)
    }
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <div
        className={cn(
          {
            'w-full overflow-hidden': !className || className === '',
          },
          className,
        )}
        ref={emblaRef}
      >
        <div className='relative flex w-full aspect-h-9/16'>
          {slides.map((slide, i) => {
            return (
              <Fragment key={i}>
                <SetSlide slide={slide} />
              </Fragment>
            )
          })}
        </div>
      </div>
      <div className='flex justify-between mt-6 mb-8'>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} navColor={'cream'} />

        <SlideProgression current={selectedIndex} total={scrollSnaps.length} navColor={'cream'} />

        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} navColor={'cream'} />
      </div>
    </>
  )
}

// SLIDE COMPONENT
const SetSlide = ({ slide }: any) => {
  return (
    <div className=' cursor-grab -mt-2 ml-1 mr-2   grow-0 shrink-0  w-[86%] sm:w-[45%] lg:w-[30%] aspect-9/16'>
      <ReactPlayer
        url={`${ImgPrefix}${slide.videoPath}.mp4`}
        width='100%'
        poster={`${ImgPrefix}${slide.videoPath}.jpg`}
        height={'100%'}
        controls={true}
        muted={false}
        playsInline={false}
        attributes={[{ poster: `${ImgPrefix}${slide.videoPath}.jpg` }]}
      />
    </div>
  )
}

const CaseStudies_TikTok = () => {
  const slides = [
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_ComeOnBrain',
      title: 'Come On, Brain',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_DontBeRediculous',
      title: `Don't Be Rediculous`,
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_EatYourVegetables',
      title: 'Eat Your Vegetables',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HappySad',
      title: 'Happy Sad',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HelloYou',
      title: 'Hello, You',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HotGirlShit',
      title: 'Hot Girl Shit',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_HowBizarre',
      title: 'How Bizarre',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_ItWasMe',
      title: 'It Was Me',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_NobleQuest',
      title: 'Noble Quest',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_NotIntoShortGuys',
      title: 'Not Into Short Guys',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_Obsessed',
      title: 'Obsessed',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_PeopleCanDoHardThings',
      title: 'People Can Do Hard Things',
    },
    {
      videoPath: '/img/case-studies/snacklins/tiktoks/SNACKLINS_TikTok_Relationships',
      title: 'People Can Do Hard Things',
    },
  ]

  return (
    <PageSection color='wine border-t-32 border-b-32 border-pink' id={'tiktok'}>
      <InnerWrapper>
        <H2 color='pink'>TikTok </H2>
        <p className='text-cream'>
          Not everything has to be a 20-person crew and a bunch of huge cameras. We believe in
          meeting our audiences where they&apos;re at. Our generation wants something that feels
          organic, authentic, and relatable. There&apos;s a tool for every job, and sometimes those
          tools are iPhone cameras and selfie sticks.{' '}
        </p>
        <p className='text-cream'>
          At PB, we’re not afraid to jump into a new medium. When we were approached to take on
          SNACKLINS TikToks, we knew to call on one of our many Gen-Zers to get the job done. On a
          monthly basis, Maria and our creative director choose a TikTok trend that SNACKLINS can
          fit snugly into and execute on it with our Pixel Bakery flair.
        </p>
        <NewCarousel slides={slides} />
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_TikTok
