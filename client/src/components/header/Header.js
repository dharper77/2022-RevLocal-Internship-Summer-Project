import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import { Grid } from '@mui/material'
import MyAccount from './MyAccount'
import Categories from './Categories'


const Header = () => {
  return (
    <Grid container className="header">
      {/* logo */}
      <Grid item xs={4} sx={{ padding: '0px' }}>
        <Logo />
      </Grid>

      {/* search bar */}
      <Grid item xs={4} sx={{ padding: '0px' }}>
        <SearchBar />
      </Grid>
      <Grid item xs={1} sx={{ padding: '0px' }}>
        <MyAccount />
      </Grid>
      <Grid item xs={2} sx={{ padding: '0px' }}>
        <Categories />
      </Grid>
      <Grid item xs={1} sx={{ padding: '0px' }}>
        <ShoppingCart />
      </Grid>
    </Grid>
  )
}

export default Header
