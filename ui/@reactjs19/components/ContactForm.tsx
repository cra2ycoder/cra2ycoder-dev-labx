'use client'

async function submitFormNow(event: React.FormEvent<HTMLFormElement>) {
  const SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form'
  event.preventDefault()
  const form: HTMLFormElement = event.target

  try {
    if (form.action !== SUBMIT_URL) {
      alert('Incorrect form action value')
      return
    }

    if (form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value')
      return
    }

    const formData = new FormData(form)
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    })

    const text = await response.text()
    alert(text)
  } catch (_) {
    alert('Error submitting form!')
  }
}

function ContactForm() {
  // Ignore the onSubmit prop, it's used by GFE to
  // intercept the form submit event to check your solution.
  // onSubmit={submitForm}
  return (
    <form
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="post"
      onSubmit={submitFormNow}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <label htmlFor="name">
          <span>Name: </span>
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          <span>Email: </span>
          <input type="text" name="email" />
        </label>
        <label htmlFor="message">
          <span>Message: </span>
          <textarea name="message" />
        </label>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}

export default ContactForm
