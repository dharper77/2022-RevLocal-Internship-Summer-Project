import React from 'react'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Container from '@mui/system/Container'
import './style/App.css'

const App = () => {
  return (
    <Container className="App" maxWidth="xl">
      <Header />
      <Products />
    </Container>
  )
}

export default App
