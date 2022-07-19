import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <Grid
      container
      sx={{
        padding: '0px'
      }}
    >
      <Grid item className="logInButton" sx={{ padding: '26px' }}>
        <Link to="/login">
          <h2>Log In / Sign Up</h2>
        </Link>
      </Grid>
    </Grid>
  )
}

export default LoginButton
