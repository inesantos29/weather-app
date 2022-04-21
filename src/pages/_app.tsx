
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'


function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle  />
    </ThemeProvider>
  )
}

export default MyApp


