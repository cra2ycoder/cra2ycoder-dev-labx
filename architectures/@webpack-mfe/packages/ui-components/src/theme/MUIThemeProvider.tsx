import { createTheme, ThemeProvider } from '@mui/material/styles'
// import { orange } from '@mui/material/colors'

const theme = createTheme({})

type TThemeProvider = {
  children: React.ReactNode
}

function MUIThemeProvider(props: TThemeProvider) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export { MUIThemeProvider }
export default MUIThemeProvider
