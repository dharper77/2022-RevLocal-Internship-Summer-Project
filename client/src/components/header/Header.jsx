import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import ShoppingCart from './ShoppingCart'
import { Grid } from '@mui/material'
import AccountMenu from './AccountMenu'
import LoginButton from './LoginButton'
import { connect } from 'react-redux'

const Header = props => {
  return (
    <Grid
      container
      className="header"
      sx={{ alignItems: 'center', justifyContent: 'space-around' }}
    >
      {/* logo */}
      <Grid item xs={2.5} sx={{ padding: '0rem' }}>
        <Logo />
      </Grid>

      {/* search bar */}
      <Grid item xs={4} sx={{ padding: '0rem' }}>
        <SearchBar />
      </Grid>

      {/* log in button or my account */}
      <Grid item xs={2} sx={{ padding: '0rem', justifyContent: 'center' }}>
        {props.isLoggedIn ? <AccountMenu /> : <LoginButton />}
      </Grid>

      {/* shopping cart */}
      <Grid item xs={1} sx={{ padding: '0rem' }}>
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
