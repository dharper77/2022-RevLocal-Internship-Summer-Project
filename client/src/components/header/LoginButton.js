import React from 'react'
import { Grid } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { SelectUnstyled } from '@mui/base'
import Button from '@mui/material/Button'
import { logIn } from '../../store/reducers/logInReducer'
import { store } from '../../store/store'

const LoginButton = () => {
  return (
    <Grid
      container
      sx={{
        padding: '0px'
      }}
    >
      <Grid item sx={{ padding: '26px' }}>
        <Button
          sx={{ width: '2.5rem', height: '2.5rem', padding: '0px' }}
          onClick={() => store.dispatch(logIn())}
        >
          Log In
        </Button>
      </Grid>
    </Grid>
  )
}

export default LoginButton
