import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const SearchBar = () => {
  return (
    <Grid
      container
      className="searchbar"
      direction="row"
      sx={{
        padding: '0px',
        justifyContent: 'center'
      }}
    >
      <Grid item>
        <input type="text" placeholder="Search..." />
      </Grid>
      <Grid item sx={{ padding: '0px' }}>
        <IconButton>
          <SearchSharpIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default SearchBar
