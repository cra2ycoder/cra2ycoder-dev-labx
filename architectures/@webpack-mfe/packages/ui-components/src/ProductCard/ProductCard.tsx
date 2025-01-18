import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function ProductCard(props: any) {
  return (
    <Box sx={{ width: '100%' }}>
      <img src={props.image} alt={props.title} style={{ width: '100%' }} />
      <Typography>{props.title}</Typography>
      {/* <Typography>{props.description.substr(0, 10)}</Typography> */}
      <Typography>{props.category}</Typography>
      <Typography>{props.price}</Typography>
      <Button variant="contained" color="primary">
        Add to Cart
      </Button>
    </Box>
  )
}

export { ProductCard }
export default ProductCard
