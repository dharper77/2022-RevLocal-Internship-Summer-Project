import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from '@mui/system/Container'
import LogInPage from './pages/LogInPage'
import ProductPage from './pages/ProductPage'
import PostNewProduct from './pages/PostNewProduct'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from './pages/ProfilePage'
import EditListingPage from './pages/EditListingPage'
import { RegisterUserPage } from './pages/RegisterUserPage'

const App = () => {
  return (
    <Router>
      <Container className="App" maxWidth="xl">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/products/id/:id" element={<ProductPage />} />
          <Route path="/sell" element={<PostNewProduct />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/myProfile" element={<ProfilePage />} />
          <Route path="/editListing/id/:id" element={<EditListingPage />} />
          <Route path="/registerUser" element={<RegisterUserPage />} />
        </Routes>
      </Container>
    </Router>
  )
}
export default App
