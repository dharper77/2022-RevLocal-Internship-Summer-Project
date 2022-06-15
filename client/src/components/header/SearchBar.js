import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const SearchBar = () => {
  return (
    <Grid
      container
      direction="row"
      sx={{
        padding: '0px',
        justifyContent: 'center'
      }}
    >
      <Grid className="searchbar" item xs={8} sx={{ paddingRight: '0px' }}>
        <input type="text" placeholder="Search..." />
      </Grid>
      <Grid item className="search-button" sx={{ marginTop: '16px' }}>
        <IconButton sx={{ padding: '7px' }}>
          <SearchSharpIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default SearchBar
