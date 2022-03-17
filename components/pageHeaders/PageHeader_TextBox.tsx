import cn from 'classnames'
import H1 from '@typography/H1'

function PageHeader_TextBox({ primaryColor, header, accentColor, subheader, subheaderColor }) {
  return (
    <div className='relative py-16 my-20 h-full flex flex-col justify-center bg-transparent '>
      <div
        className={cn(
          'my-20 max-w-sm  sm:max-w-md md:max-w-lg lg:max-w-3xl py-12 flex justify-center ',
          [`bg-${primaryColor}`],
        )}
      >
        <div className='w-fit px-6 mx-12'>
          <H1 color={accentColor}>{header}</H1>
          <div className={cn('lowercase my-2 text-2xl font-bold', [`text-${subheaderColor}`])}>
            {subheader}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PageHeader_TextBox
