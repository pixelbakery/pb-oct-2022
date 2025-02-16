import { NextSeo } from 'next-seo'

const Recipes_SEO = () => {
  return (
    <NextSeo
      title="Mom's Recipes - Get the Latest Scoop from the PB Team"
      description={
        'Sometimes we say smart things, and sometimes we have things we want to say. You can find all those things here.'
      }
      canonical='https://pixelbakery.com/recipes'
      openGraph={{
        url: `https://pixelbakery.com/recipes`,
        title: "Pixel Bakery – Mom's Recipes",
        description:
          'Sometimes we say smart things, and sometimes we have things we want to say. You can find all those things here.',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            width: 1200,
            height: 900,
            alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
            width: 1080,
            height: 810,
            alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
            width: 1080,
            height: 810,
            alt: 'Danny Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
          },
        ],
      }}
    />
  )
}
export default Recipes_SEO
