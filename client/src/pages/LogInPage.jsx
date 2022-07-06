import React, { useState } from 'react'
import '../style/loginPage.css'
import { Button, Grid, TextField } from '@mui/material'
import { store } from '../store/store'
import { useDispatch } from 'react-redux'
import { logIn } from '../store/reducers/logInReducer'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const LogInPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const state = store.getState()

  const handleSubmit = (username, password) => {
    const found = state.logIn.users.find(el => el.username === username)
    if (found && found.password === password) {
      dispatch(logIn())
    } else {
      console.log('Username or password is incorrect')
    }
  }

  return (
    <div className="logInPage">
      <Grid container alignItems="center" sx={{ padding: '0px' }}>
        <Grid item xs={2}>
          <Button
            className="back-button"
            variant="contained"
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
      {/* Username */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: '0px' }}
      >
        <Grid item xs={2}>
          <TextField
            value={username}
            placeholder="Username"
            type="text"
            size="small"
            className="loginPage-input"
            onChange={event => setUsername(event.target.value)}
          />
        </Grid>
      </Grid>

      {/* Password */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: '0px' }}
      >
        <Grid item xs={2}>
          <TextField
            className="loginPage-input"
            placeholder="Password"
            value={password}
            type="text"
            size="small"
            onChange={event => setPassword(event.target.value)}
          />
        </Grid>
      </Grid>

      {/* Log in button */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: '0px' }}
      >
        <Grid item xs={2}>
          <Button
            className="loginPage-Button"
            variant="contained"
            onClick={() => handleSubmit(username, password)}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default LogInPage
