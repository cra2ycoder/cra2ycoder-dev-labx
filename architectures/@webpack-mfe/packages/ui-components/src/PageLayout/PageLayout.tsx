import Box from '@mui/material/Box'

function PageLayout({ children }: any) {
  return (
    <Box
      sx={{
        marginTop: '5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        overflowX: 'hidden',
        overflowY: 'auto',
        height: '100%',
        paddingBottom: '5rem',
      }}
    >
      {children}
    </Box>
  )
}

export { PageLayout }
export default PageLayout
