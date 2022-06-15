import React from 'react'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import { Grid } from '@mui/material'


const Header = () => {
  return (
    <Grid container className="header">
      <Grid item xs={4} sx={{ padding: '0px' }}>
        <SearchBar />
      </Grid>
      <Grid item xs={2} sx={{ padding: '0px' }}>
        <ShoppingCart />
      </Grid>
    </Grid>
  )
}

export default Header
