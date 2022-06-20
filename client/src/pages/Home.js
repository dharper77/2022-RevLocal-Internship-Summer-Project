import React from 'react'
import Header from '../components/header/Header'
import Products from '../components/products/Products'
import '../style/App.css'
import Sidebar from '../components/header/SideBar'
import { Grid } from '@mui/material'

const Home = () => {
  return (
    <>
      <Header />
      <Grid container sx={{ padding: '0px' }}>
        <Grid item xs={2} sx={{ paddingTop: '26px' }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Products />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
