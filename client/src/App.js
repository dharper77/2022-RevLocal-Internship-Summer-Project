import React from 'react'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Container from '@mui/system/Container'
import './style/App.css'
import Sidebar from './components/header/SideBar'
import { Grid } from '@mui/material'

const App = () => {
  return (
    <Container className="App" maxWidth="xl" >
      <Header />
        <Grid container sx={{ padding: '0px' }}>
          <Grid item xs={2} sx={{ paddingRight: '0px', paddingLeft: '0px' }}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            <Products />
        </Grid>
        
        
        
      </Grid>
      
    </Container>
  )
}

export default App
