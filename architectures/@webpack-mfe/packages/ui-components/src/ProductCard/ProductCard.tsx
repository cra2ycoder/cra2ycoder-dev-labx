import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function ProductCard() {
  return (
    <Box>
      <img src="" alt="" />
      <Typography>Product Title</Typography>
      <Typography>Product Desc</Typography>
      <Typography>Product category</Typography>
      <Typography>Product Price</Typography>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </Box>
  )
}

export { ProductCard }
export default ProductCard
