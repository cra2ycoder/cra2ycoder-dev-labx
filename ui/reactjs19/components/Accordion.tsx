'use client'

import { useState } from 'react'

const accordionConfig = [
  {
    title: 'HTML',
    content:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    title: 'CSS',
    content:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
  },
  {
    title: 'JavaScript',
    content:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
  },
]

type TAccordionItemProps = {
  title: string
  content: string
}

export function AccordionItem(props: Readonly<TAccordionItemProps>) {
  const { title, content } = props
  const [openState, setOpenState] = useState(false)

  const toggle = () => {
    setOpenState(!openState)
  }

  return (
    <>
      <style jsx>
        {`
          .accordion-icon {
            border: solid currentcolor;
            border-width: 0 2px 2px 0;
            display: inline-block;
            height: 8px;
            pointer-events: none;
            transform: translateY(-2px) rotate(45deg);
            width: 8px;
          }

          .accordion-icon--rotated {
            transform: translateY(2px) rotate(-135deg);
          }
        `}
      </style>
      <div style={{ padding: '0.2rem' }}>
        <div onClick={toggle}>
          {title}{' '}
          <span
            aria-hidden={true}
            className={`accordion-icon${openState ? '--rotated' : ''}`}
          />
        </div>
        {openState && <div style={{ padding: '1rem 0' }}>{content}</div>}
      </div>
    </>
  )
}

export default function Accordion() {
  return (
    <div>
      {accordionConfig.map((item: TAccordionItemProps, id: number) => (
        <AccordionItem key={`acc-item-${id}`} {...item} />
      ))}
    </div>
  )
}
