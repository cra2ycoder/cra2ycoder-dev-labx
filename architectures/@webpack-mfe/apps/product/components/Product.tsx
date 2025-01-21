import { useEffect } from 'react'
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import StarIcon from '@mui/icons-material/Star'
import Button from '@mui/material/Button'
import { useProductApi } from '@api/ecomm'
import { Image } from '@ui/components'

function Product() {
  const productId = 1
  const productApi = useProductApi({ productId }) as any

  const data = productApi.state.data || {}

  return (
    <Stack
      spacing={4}
      width="100%"
      direction="column"
      sx={{ marginTop: '10rem' }}
    >
      <Stack spacing={4} direction="row">
        <Stack width="50%" sx={{ borderRight: '1px solid #e3e3e3' }}>
          <Image image={data.image} height="470px" minHeight="470px" />
        </Stack>
        <Box width="50%">
          <Stack
            spacing={2}
            width="75%"
            // justifyContent={'space-between'}
            height="100%"
          >
            <Chip
              label={data.category}
              sx={{ width: 'max-content', color: '#888' }}
            />
            <Typography variant="h4">{data?.title}</Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.description}
            </Typography>
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <Chip
                label={data.rating?.rate}
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
              <Typography
                variant="caption"
                sx={{ fontWeight: 'bold', color: '#5f5b5b' }}
              >
                {data.rating?.count} Reviews
              </Typography>
            </Stack>
            <Typography variant="h3" sx={{ marginTop: '3rem' }}>
              $
              {String(data?.price).indexOf('.') > 0
                ? data?.price
                : `${data?.price}.00`}
            </Typography>
            <Stack direction="row" spacing={4}>
              <Button variant="contained" color="primary" sx={{ width: '50%' }}>
                Add to Cart
              </Button>
              <Button variant="outlined" color="primary" sx={{ width: '50%' }}>
                Add to Wishlist
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  )
}

export { Product }
export default Product
