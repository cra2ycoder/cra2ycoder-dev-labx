import { ClassRenderProp, FunctionRenderProp } from '../code/RenderProps'

const renderHeading = () => {
  return <h3>heading</h3>
}

const renderDescription = () => {
  return <p>description</p>
}

export default function RenderProps() {
  return (
    <>
      <ClassRenderProp
        renderHeading={renderHeading}
        renderDescription={renderDescription}
      />
      <hr />
      <FunctionRenderProp
        renderHeading={renderHeading}
        renderDescription={renderDescription}
      />
    </>
  )
}
