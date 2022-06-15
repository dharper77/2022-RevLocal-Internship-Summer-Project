import React from 'react'
import SearchBar from './SearchBar'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <Grid container className="header">
      <Grid item xs={5} sx={{ padding: '0px' }}>
        <SearchBar />
      </Grid>
    </Grid>
  )
}

export default Header
