'use client'

import { useFormStatus } from 'react-dom'

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function FormUI() {
  const formState = useFormStatus()
  return (
    <>
      <label>
        User Name:
        <input name="name" id="name" disabled={formState.pending} />
      </label>
      <label>
        Email:
        <input name="email" id="email" disabled={formState.pending} />
      </label>
      <label>
        Message:
        <textarea name="name" id="name" disabled={formState.pending} />
      </label>
      <div>Posting: {formState.data?.get('name')}</div>
      <button disabled={formState.pending}>
        {formState.pending ? 'Submitting...' : 'Submit'}
      </button>
    </>
  )
}

function CommentForm() {
  async function submitForm() {
    await delay(1000)
  }

  return (
    <>
      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        `}
      </style>
      <form action={submitForm}>
        <FormUI />
      </form>
    </>
  )
}

export default CommentForm
