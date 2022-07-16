import React, { useState } from 'react'
import '../style/loginPage.css'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logIn } from '../store/reducers/logInReducer'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LogInPage = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [helperText, setHelperText] = useState('')
  const [error, setError] = useState(false)
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (username, password) => {
    fetch(`/api/v1/users/username/${username}/password/${password}`)
      .then(response => response.json())
      .then(user => {
        if (user) {
          dispatch(
            logIn({
              userId: user._id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName
            })
          )
          navigate('/')
        } else {
          setUsername(null)
          setPassword(null)
          setHelperText('Username or password are incorrect')
          setError(true)
        }
      })
  }

  useEffect(() => {
    if (username && password) {
      setIsLoginButtonDisabled(false)
    } else {
      setIsLoginButtonDisabled(true)
    }
  }, [username, password])

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={5}
        sx={{ border: '1px solid black', borderRadius: '10px' }}
      >
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ paddingBottom: '0.5rem' }}>
              Log In
            </Typography>
            <Link to="/registerUser">
              <Typography paragraph style={{ color: 'blue' }}>
                or create an account
              </Typography>
            </Link>
            <Divider sx={{ paddingTop: '1rem' }} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={event => setUsername(event.target.value)}
              error={error}
              required
              size="medium"
              className="textfield"
              label="Username"
              value={username}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={event => setPassword(event.target.value)}
              error={error}
              helperText={helperText}
              required
              size="medium"
              className="textfield"
              label="Password"
              type="password"
              value={password}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              disabled={isLoginButtonDisabled}
              className="loginPage-Button"
              variant="contained"
              onClick={() => handleSubmit(username, password)}
              fullWidth
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

// <div className="logInPage">
//   <Grid container alignItems="center" sx={{ padding: '0px' }}>
//     <Grid item xs={2}>
//       <Button
//         className="back-button"
//         variant="contained"
//         component={Link}
//         to="/"
//         startIcon={<ArrowBackIcon />}
//       >
//         Back to Home
//       </Button>
//     </Grid>
//   </Grid>
//   {/* Username */}
//   <Grid
//     container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justifyContent="center"
//     sx={{ padding: '0px' }}
//   >
//     <Grid item xs={2}>
//       <TextField
//         value={username}
//         label="Username"
//         error={error}
//         type="text"
//         size="small"
//         className="loginPage-input"
//         onChange={event => {
//           setError(false)
//           setHelperText('')
//           setUsername(event.target.value)
//         }}
//       />
//     </Grid>
//   </Grid>

//   {/* Password */}
//   <Grid
//     container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justifyContent="center"
//     sx={{ padding: '0px' }}
//   >
//     <Grid item xs={2}>
//       <TextField
//         className="loginPage-input"
//         label="Password"
//         helperText={helperText}
//         error={error}
//         type="password"
//         size="small"
//         onChange={event => {
//           setError(false)
//           setHelperText('')
//           setPassword(event.target.value)
//         }}
//       />
//     </Grid>
//   </Grid>

//   {/* Log in button */}
//   <Grid
//     container
//     spacing={0}
//     direction="column"
//     alignItems="center"
//     justifyContent="center"
//     sx={{ padding: '0px' }}
//   >
//     <Grid item xs={3}>

//     </Grid>
//     <Grid item xs={3}>
//       <Button variant="contained" component={Link} to="/registerUser">
//         Sign Up
//       </Button>
//     </Grid>
//   </Grid>
// </div>

export default LogInPage
