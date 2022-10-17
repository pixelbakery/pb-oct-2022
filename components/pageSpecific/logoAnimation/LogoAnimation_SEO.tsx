import { NextSeo } from 'next-seo'

const LogoAnimation_SEO = () => {
  return (
    <NextSeo
      title='Logo Animation | Services'
      canonical={`https://pixelbakery.com/logo-animation`}
      description={`Bring your logo to life with an eye-catching and memorable animation`}
      openGraph={{
        url: `https://pixelbakery.com/logo-animation`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            width: 1200,
            height: 900,
            alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
            width: 1080,
            height: 810,
            alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
            width: 1080,
            height: 810,
            alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
          },
        ],
        title: 'Logo Animation | Services',
        description: `Bring your logo to life with an eye-catching and memorable animation`,
      }}
    />
  )
}
export default LogoAnimation_SEO