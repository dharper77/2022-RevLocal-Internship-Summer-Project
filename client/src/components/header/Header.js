import React from 'react'
import SearchBar from './SearchBar'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <Grid container className="header" sx={{ padding: '0px' }}>
      <Grid item xs={6} sx={{ padding: '0px' }}>
        <SearchBar />
      </Grid>
    </Grid>
  )
}

export default Header
