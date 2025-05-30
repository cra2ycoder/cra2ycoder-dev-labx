import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import StarIcon from '@mui/icons-material/Star'
import Image from '../Image'

// import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'

function ProductCard(props: any) {
  return (
    <motion.div
      style={{ height: '100%' }}
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: '0px 1rem 1.5rem  rgba(0, 0, 0, 0.4)',
      }}
      whileTap={{
        scale: 1,
        y: -8,
      }}
    >
      <Paper
        elevation={0}
        square={true}
        sx={{
          width: '100%',
          height: '100%',
          padding: '1rem',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
        onClick={() => {
          props.onClick(props.id)
        }}
      >
        <Image {...props} />
        <Stack
          direction="row"
          sx={{
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
          <Typography
            variant="caption"
            sx={{ fontWeight: 'bold', color: '#5f5b5b' }}
          >
            {props.rating.count} Reviews
          </Typography>
        </Stack>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            height: '100%',
            flexGrow: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: '400', color: '#27282b' }}>
            {props.title}
          </Typography>
          <Chip
            label={props.category}
            sx={{ width: 'max-content', color: '#888' }}
          />
          <Typography
            variant="h4"
            sx={{ paddingTop: '1rem', fontWeight: '400', color: '#27282b' }}
          >
            $
            {String(props.price).indexOf('.') > 0
              ? props.price
              : `${props.price}.00`}
          </Typography>
        </Stack>
        {/* <Button variant="contained" color="primary">
        Add to Cart
      </Button> */}
      </Paper>
    </motion.div>
  )
}

export { ProductCard }
export default ProductCard
