import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

function Header() {
  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          E-Commerce Store
        </Typography>
        <Box sx={{ width: '50%' }}>
          <InputBase
            sx={{
              width: '100%',
              height: '40px',
              backgroundColor: 'white',
              padding: '0 1rem',
              borderRadius: '4px',
            }}
            placeholder="Search for Products, Categories, and more"
          />
        </Box>
        <Stack direction="row" spacing={4}>
          <FavoriteBorderOutlinedIcon />
          <ShoppingCartOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
export default Header
