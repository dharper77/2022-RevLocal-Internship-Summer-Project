import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import { Grid } from '@mui/material'
import MyAccount from './MyAccount'
import LoginButton from './LoginButton'

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

      {/* my account or login */}
      <Grid item xs={1} sx={{ padding: '0px' }}>
        <MyAccount />
      </Grid>

      <Grid item xs={2} sx={{ padding: '0px' }}>
        <LoginButton />
      </Grid>

      {/* shopping cart */}
      <Grid item xs={1} sx={{ padding: '0px' }}>
        <ShoppingCart />
      </Grid>
    </Grid>
  )
}

export default Header
