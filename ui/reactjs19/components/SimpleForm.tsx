'use client'

function SimpleForm() {
  function submitForm(formData: any) {
    console.log(formData.get('name'))
    console.log(formData.get('password'))
  }

  return (
    <form action={submitForm}>
      <input type="text" id="name" name="name" />
      <input type="password" name="password" id="password" />
      <button type="submit">submit</button>
    </form>
  )
}

export default SimpleForm
