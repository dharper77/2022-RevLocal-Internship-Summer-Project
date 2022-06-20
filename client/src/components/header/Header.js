import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import { Grid } from '@mui/material'
import MyAccount from './MyAccount'
import LoginButton from './LoginButton'
import { connect } from 'react-redux'

const Header = props => {
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

      {/* log in button or my account */}
      <Grid item xs={3} sx={{ padding: '0px' }}>
        {props.isLoggedIn ? <MyAccount /> : <LoginButton />}
      </Grid>

      {/* shopping cart */}
      <Grid item xs={1} sx={{ padding: '0px' }}>
        <ShoppingCart />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.logIn.isLoggedIn
  }
}

export default connect(mapStateToProps)(Header)
