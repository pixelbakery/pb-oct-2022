import { NextSeo } from 'next-seo'

function Store_SEO() {
  return (
    <NextSeo
      title='Store – Pixel Bakery'
      description={`We do a few things and we do it well. we're like a scalpel; we operate with precision and intent. But, like, keyframes instead of open heart surgery.`}
      canonical={`https://pixelbakery.com/store`}
      openGraph={{
        url: `https://pixelbakery.com/store`,
        title: 'Store',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            alt: `Pixel Bakery Design Studio (PBDS) is a multi-disciplinary production studio focused on animation, motion design, and commercial film production`,
          },
        ],
        description:
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
      }}
    />
  )
}

export default Store_SEO
