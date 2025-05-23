import { render, screen } from '@testing-library/react'
import SimpleComponent from './SimpleComponent'

test('simple test case', () => {
  render(<SimpleComponent />)
  screen.getByText('hello')
  screen.getByRole('button')
})
