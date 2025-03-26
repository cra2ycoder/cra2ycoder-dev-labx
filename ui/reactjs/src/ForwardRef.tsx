import { createRef, forwardRef } from 'react'

const InputBox = forwardRef((props, ref) => {
  return <input ref={ref} />
})

/**
 * @description
 * accessing ref from the props
 * will be failing - we will be getting warning errors from React
 */
// function InputBox(props) {
// console.log({ props }, props.ref);
// return <input {...props} />;
// }

export default function ForwardRefExample() {
  const inputRef = createRef()

  const setFocusToRef = () => {
    /**
     * @description
     * where we are accessing the InputBox
     * component input element from here using ref
     */
    inputRef.current.focus()
  }

  return (
    <div>
      <InputBox ref={inputRef} />
      <button onClick={setFocusToRef}>Click me to Focus!</button>
    </div>
  )
}
