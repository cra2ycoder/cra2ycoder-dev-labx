import { useEffect } from 'react'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useProductApi } from '@api/ecomm'
import { ProductCard } from '@ui/components'

function ProductList() {
  const productApi = useProductApi() as any

  useEffect(() => {
    productApi.actions.getAllProducts()
  }, [])

  return (
    <Stack spacing={2}>
      <Typography variant="h4">All Products</Typography>
      <Grid container>
        {productApi.state.data &&
          productApi.state.data.map((item: any, index: number) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
              sx={{
                border: '1px solid #e3e3e3',
              }}
            >
              <ProductCard key={`product-${index}`} {...item} />
            </Grid>
          ))}
      </Grid>
    </Stack>
  )
}

export { ProductList }
export default ProductList
