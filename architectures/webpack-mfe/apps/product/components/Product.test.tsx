import { render } from '@testing-library/react'
import { Product } from './Product'

test('renders without crashing when product data is available', () => {
  const mockProductData = {
    id: '123',
    title: 'Test Product',
    description: 'This is a test product.',
    image: 'test-image.jpg',
    category: 'Test Category',
    price: 9.99,
    rating: {
      rate: 4.5,
      count: 100,
    },
  }

  const mockProps = {
    pathParams: {
      id: mockProductData.id,
    },
  }

  const { getByText, getByLabelText } = render(<Product {...mockProps} />)

  expect(getByText(mockProductData.title)).toBeInTheDocument()
  expect(getByText(mockProductData.description)).toBeInTheDocument()
  expect(getByText(mockProductData.category)).toBeInTheDocument()
  expect(getByText(`$${mockProductData.price.toFixed(2)}`)).toBeInTheDocument()
  expect(
    getByText(`${mockProductData.rating.rate} Reviews`)
  ).toBeInTheDocument()
  expect(getByText('Add to Cart')).toBeInTheDocument()
  expect(getByText('Add to Wishlist')).toBeInTheDocument()

  // Additional assertions for Chip and Button components
  expect(getByLabelText(mockProductData.category)).toBeInTheDocument()
  expect(getByLabelText(`${mockProductData.rating.rate}`)).toBeInTheDocument()
})
