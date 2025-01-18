import { useEffect } from 'react'
import { useProductApi } from '@api/ecomm'
import { ProductCard } from '@ui/components'

function ProductList() {
  const productApi = useProductApi()

  //   if (productApi.api.isLoading) {
  //     return <div>Loading...</div>
  //   }

  useEffect(() => {
    productApi.getProducts()
  }, [])

  return (
    <div>
      <ProductCard />
    </div>
  )
}

export { ProductList }
export default ProductList
