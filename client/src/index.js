import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'

// const themeOptions = createTheme({
//   palette: {
//     primary: {
//       main: '#b388ff',
//       light: '#e7b9ff',
//       dark: '#805acb',
//       contrastText: '#ffffff'
//     },
//     secondary: {
//       main: '#311b92',
//       light: '#6746c3',
//       dark: '#000063'
//     }
//   }
// })

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //<React.StrictMode>

  <Provider store={store}>
    {/* <ThemeProvider theme={themeOptions}> */}
    <App />
    {/* </ThemeProvider> */}
  </Provider>

  //</React.StrictMode>
)
