import React, { useState } from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { useDispatch } from 'react-redux'
import { setSearchBarInput } from '../../store/reducers/searchBarReducer'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

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
        <input
          type="text"
          placeholder="Search..."
          onChange={event => setInput(event.target.value)}
        />
      </Grid>

      {/* search bar magnifying-glass button */}
      <Grid item className="search-button">
        <IconButton
          sx={{ padding: '7px' }}
          onClick={() => dispatch(setSearchBarInput({ input: input }))}
        >
          <SearchSharpIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default SearchBar
