import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const SearchBar = () => {
  return (
    // search bar input field + button container
    <Grid
      container
      direction="row"
      sx={{
        padding: '10px',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* search bar input field */}
      <Grid className="searchbar" item xs={8} sx={{ paddingRight: '0px' }}>
        <input type="text" placeholder="Search..." />
      </Grid>

      {/* search bar magnifying-glass button */}
      <Grid item className="search-button">
        <IconButton sx={{ padding: '7px' }}>
          <SearchSharpIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default SearchBar
