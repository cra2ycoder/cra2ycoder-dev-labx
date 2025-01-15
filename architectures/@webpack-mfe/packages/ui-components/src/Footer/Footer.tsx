import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Typography
        variant="body2"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block', textAlign: 'center' } }}
      >
        2025 Copyrights. All rights reserved.
      </Typography>
    </AppBar>
  )
}

export { Footer }
export default Footer
