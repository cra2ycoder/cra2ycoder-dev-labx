import { useState } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

function Image(props: any) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1rem',
        height: props.height || '15rem',
        minHeight: props.minHeight || '220px',
      }}
    >
      {isImageLoading && <CircularProgress />}
      <img
        src={props.image}
        alt={props.title}
        loading="lazy"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        onLoad={() => {
          setIsImageLoading(false)
        }}
      />
    </Box>
  )
}

export { Image }
export default Image
