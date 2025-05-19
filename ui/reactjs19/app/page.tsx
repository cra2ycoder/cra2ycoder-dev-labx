import { Suspense } from 'react'
import Counter from '@/components/Counter'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'
// import ApiComponent from '@/components/ApiComponent'
import SimpleForm from '@/components/SimpleForm'
import CommentForm from '@/components/CommentForm'
import PriceManager from '@/components/PriceManager'
import UseCallbackPerf from '@/components/UseCallbackPerf'

export default function Home() {
  return (
    <div>
      <Counter />
      <hr />
      <Accordion />
      <hr />
      <ContactForm />
      <hr />
      <SimpleForm />
      <hr />
      {/* <Suspense fallback={<div>loading...</div>}>
        <ApiComponent />
      </Suspense>
      <hr /> */}
      <hr />
      <CommentForm />
      <hr />
      <PriceManager />
      <hr />
      <UseCallbackPerf />
    </div>
  )
}
