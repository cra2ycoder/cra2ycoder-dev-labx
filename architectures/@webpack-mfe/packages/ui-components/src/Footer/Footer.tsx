import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box
      sx={{
        borderTop: '1px solid #e3e3e3',
        height: '47px',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
      component="footer"
    >
      <Typography noWrap variant="caption">
        © 2025 E-Commerce MFE. All rights reserved.
      </Typography>
    </Box>
  )
}

export { Footer }
export default Footer
