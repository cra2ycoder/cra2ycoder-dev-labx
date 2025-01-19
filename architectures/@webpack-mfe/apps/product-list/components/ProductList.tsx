import { useEffect } from 'react'
import { useProductApi } from '@api/ecomm'
import { ProductCard } from '@ui/components'
import Grid from '@mui/material/Grid2'

function ProductList() {
  const productApi = useProductApi() as any

  useEffect(() => {
    productApi.actions.getAllProducts()
  }, [])

  return (
    <Grid container spacing={2}>
      {productApi.state.data &&
        productApi.state.data.map((item: any, index: number) => (
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <ProductCard key={`product-${index}`} {...item} />
          </Grid>
        ))}
    </Grid>
  )
}

export { ProductList }
export default ProductList
