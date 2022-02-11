import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

import LogoAnimation_GetStarted_Formik from './LogoAnimation_GetStarted_Formik'
import Button_Filled from '@parts/Button_Filled'

function LogoAnimation_GetStarted() {
  return (
    <section className='my-4 px-12 py-12 bg-white' id='descriptions'>
      <InnerWrapper>
        <H2 className='pb-6'>Get Started</H2>

        <LogoAnimation_GetStarted_Formik />
      </InnerWrapper>
    </section>
  )
}
export default LogoAnimation_GetStarted