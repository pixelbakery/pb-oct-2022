import { SendToMonday_Tutorials } from '@lib/api_sendToMonday'
import H2 from '@typography/H2'

import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import { useForm } from 'react-hook-form'

function Education_TutorialRequests() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => SendToMonday_Tutorials(data)

  return (
    <PageSection>
      <InnerWrapper>
        <div>
          <H2 id='tutorial-requests'>Tutorial Requests</H2>
        </div>

        <div className='w-full '>
          <form
            className='mx-auto max-w-2xl  flex flex-wrap gap-2'
            onSubmit={handleSubmit(onSubmit)}
            data-netlify='true'
          >
            <input
              className='form-border-b w-full'
              type='text'
              placeholder='name'
              {...register('name', { required: true })}
            />
            <input
              className='form-border-b w-full'
              type='email'
              placeholder='email'
              {...register('email', { required: true })}
            />

            <input
              className='form-border-b w-full'
              type='text'
              placeholder="what's this all about?"
              {...register('subject', {})}
            />
            <textarea
              className='form-border-b w-full'
              placeholder='sup?'
              rows={5}
              {...register('message', {})}
            />

            <input
              className='bg-blue text-lg font-bold text-cream rounded-md px-8 py-3 '
              type='submit'
            />
          </form>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_TutorialRequests
