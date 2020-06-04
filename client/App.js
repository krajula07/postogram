import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {teal, orange} from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#4d4d4d',
    main: '#212121',
    dark: '#171717',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffd95b',
    main: '#ffa726',
    dark: '#c77800',
    contrastText: '#000',
  },
    openTitle: teal['700'],
    protectedTitle: orange['700'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
