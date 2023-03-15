import { ThemeProvider } from 'styled-components'
import { Home } from './pages/home'
import { Transactions } from './pages/Transactions'

import Privite from './routes/privite'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { createBrowserRouter } from 'react-router-dom'
import { Registrar } from './pages/registrar'
import { Entrar } from './pages/entrar'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    ),
  },
  {
    path: '/entrar',
    element: (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Entrar />
      </ThemeProvider>
    ),
  },
  {
    path: '/registrar',
    element: (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Registrar />
      </ThemeProvider>
    ),
  },
  {
    path: '/transactions',
    element: (
      <Privite>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Transactions />
        </ThemeProvider>
      </Privite>
    ),
  },
])

export { router }
