import React, { useState, useEffect } from 'react'
import { Grid, TextField, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import { connect, useDispatch } from 'react-redux'
import { setSearchBarInput } from '../../store/reducers/searchBarReducer'
import { useNavigate } from 'react-router-dom'

const SearchBar = searchBarInput => {
  const dispatch = useDispatch()
  const [input, setInput] = useState(searchBarInput.searchBarInput)
  const navigate = useNavigate()

  const handleClearClick = () => {
    setInput('')
    dispatch(setSearchBarInput({ input: '' }))
  }

  useEffect(() => {
    setInput(searchBarInput.searchBarInput)
  }, [searchBarInput])

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
      {/* className="searchbar" */}
      <Grid item xs={8} sx={{ paddingRight: '0px' }}>
        <TextField
          sx={{
            background: '#FFFFFF',
            height: '2.5rem',
            justifyContent: 'center',
            border: '1px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '10px 0px 0px 10px',
            padding: '0px',
            width: '100%',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.125)'
          }}
          type="text"
          placeholder="Search..."
          onChange={event => setInput(event.target.value)}
          value={input}
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton
                sx={{ visibility: input ? 'visible' : 'hidden' }}
                onClick={handleClearClick}
              >
                <ClearIcon />
              </IconButton>
            )
          }}
        />
      </Grid>

      {/* search bar magnifying-glass button */}
      <Grid item className="search-button">
        <IconButton
          sx={{ padding: '7px' }}
          onClick={() => {
            dispatch(setSearchBarInput({ input: input }))
            navigate('/')
          }}
        >
          <SearchSharpIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    searchBarInput: state.searchbar.input
  }
}

export default connect(mapStateToProps)(SearchBar)
