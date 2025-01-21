import Box from '@mui/material/Box'

function PageLayout({ children }: any) {
  return (
    <Box
      component="main"
      sx={{
        padding: '5rem 1.5rem',
        overflowX: 'hidden',
        overflowY: 'auto',
        minHeight: 'calc(100vh - 13rem)',
      }}
    >
      {children}
    </Box>
  )
}

export { PageLayout }
export default PageLayout
