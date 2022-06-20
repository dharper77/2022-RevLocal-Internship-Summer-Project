import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from '@mui/system/Container'
import LogInPage from './pages/LogInPage'
import ProductPage from './pages/ProductPage'

const App = () => {
  return (
    <Router>
      <Container className="App" maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Container>
    </Router>
  )
}
export default App
