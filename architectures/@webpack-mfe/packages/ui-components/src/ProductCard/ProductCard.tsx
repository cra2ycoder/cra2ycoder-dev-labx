import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import StarIcon from '@mui/icons-material/Star'

function ProductCard(props: any) {
  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        padding: '1rem',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '15rem',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
          minHeight: '220px',
        }}
      >
        <img
          src={props.image}
          alt={props.title}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Chip
          label={props.rating.rate}
          icon={<StarIcon sx={{ fill: 'white', fontSize: '1rem' }} />}
          sx={{
            width: 'max-content',
            backgroundColor: 'green',
            color: 'white',
            minWidth: '3rem',
            maxHeight: '2rem',
            paddingLeft: '0.4rem',
          }}
        />
        <Typography variant="caption">{props.rating.count} Reviews</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          height: '100%',
          flexGrow: 1,
        }}
      >
        <Typography variant="h6">{props.title}</Typography>
        <Chip label={props.category} sx={{ width: 'max-content' }} />
        <Typography variant="h5">${props.price}</Typography>
      </Box>
      {/* <Button variant="contained" color="primary">
        Add to Cart
      </Button> */}
    </Paper>
  )
}

export { ProductCard }
export default ProductCard
