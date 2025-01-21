import { useEffect } from 'react'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useProductListApi } from '@api/ecomm'
import {
  ProductCard,
  ProductCardSkeleton,
} from '@ui/components/src/ProductCard'

function ProductList() {
  const productApi = useProductListApi() as any

  useEffect(() => {
    productApi.actions.getAllProducts()
  }, [])

  const data = productApi.state.data || Array(10).fill(0)

  return (
    <Stack spacing={2}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 200, paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        All Products ({data.length} items)
      </Typography>
      <Grid container>
        {data &&
          data.map((item: any, index: number) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
              sx={{
                border: '1px solid #e3e3e3',
              }}
            >
              {productApi.state.isLoading && <ProductCardSkeleton />}
              {!productApi.state.isLoading && (
                <ProductCard key={`product-${index}`} {...item} />
              )}
            </Grid>
          ))}
      </Grid>
    </Stack>
  )
}

export { ProductList }
export default ProductList
