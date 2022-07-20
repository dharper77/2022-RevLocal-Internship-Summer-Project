import { Button, Grid, TextField, Divider } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../../style/SetUpStore.css'

const StoreSetUpPage3 = () => {
  const [description, setDescription] = useState('')
  const [logoURL, setLogoURL] = useState('')
  const [bannerURL, setBannerURL] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const { shopId } = useParams()

  const submitChange = async () => {
    try {
      await axios.patch(`/api/v1/shops/id/${shopId}`, {
        description,
        logoURL,
        bannerURL,
        shipsFrom: {
          city,
          state
        }
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <Header />

      <Grid container justifyContent="space-evenly" sx={{ paddingTop: '3rem' }}>
        <Grid
          container
          item
          direction="column"
          alignItems="flex-start"
          sx={{
            padding: '2rem',
            paddingTop: '0px',
            border: '1px solid black',
            borderRadius: '10px'
          }}
          xs={6}
        >
          <Grid container item justifyContent="center" sx={{ padding: '0px' }}>
            <Grid item xs={12}>
              <h2 style={{ marginTop: '2rem' }}>Personalize Shop</h2>
            </Grid>
            <Grid item xs={6}>
              {/* TODO - fix this  */}
              <Divider style={{ width: '100%' }} />
            </Grid>
          </Grid>
          <Grid item sx={{ padding: '0px' }}>
            <h3 style={{ marginTop: '2rem' }}>Logo URL:</h3>
          </Grid>
          <TextField
            fullWidth
            className="setUpFields"
            onChange={event => setLogoURL(event.target.value)}
          />
          <Grid item sx={{ padding: '0px' }}>
            <h3 style={{ marginTop: '2rem' }}>Banner URL:</h3>
          </Grid>
          <TextField
            fullWidth
            className="setUpFields"
            onChange={event => setBannerURL(event.target.value)}
          />
          <Grid item sx={{ padding: '0px' }}>
            <h3 style={{ marginTop: '2rem' }}>Description:</h3>
          </Grid>
          <TextField
            fullWidth
            className="description"
            multiline
            rows={6}
            onChange={event => setDescription(event.target.value)}
          />
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: '2rem',
            paddingTop: '0px',
            border: '1px solid black',
            borderRadius: '10px'
          }}
          xs={4}
        >
          <Grid item sx={{ padding: '0px' }}>
            <h3 style={{ marginTop: '2rem' }}>Where are you shipping from?</h3>
            <Divider style={{ width: '100%' }} />
          </Grid>
          <Grid item sx={{ padding: '0px' }}>
            <h3 style={{ marginTop: '2rem' }}>State:</h3>
          </Grid>
          <TextField
            fullWidth
            className="setUpFields"
            onChange={event => setState(event.target.value)}
          />
          <Grid item sx={{ padding: '0px' }}>
            <h3 style={{ marginTop: '2rem' }}>City:</h3>
          </Grid>
          <TextField
            fullWidth
            className="setUpFields"
            onChange={event => setCity(event.target.value)}
          />
        </Grid>
        <Grid container item justifyContent="space-between" alignItems="center">
          <Grid item xs="auto">
            <Link to={`/setUpShop/2/${shopId}`}>
              <Button
                variant="contained"
                startIcon={<ArrowBack />}
                sx={{ marginBottom: '2rem' }}
              >
                Previous Step
              </Button>
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Stepper activeStep={1} alternativeLabel>
              <Step key={1}>
                <StepLabel>Name your shop</StepLabel>
              </Step>
              <Step key={2}>
                <StepLabel>Personalize shop</StepLabel>
              </Step>
              <Step key={3}>
                <StepLabel>Stock your shop</StepLabel>
              </Step>
            </Stepper>
          </Grid>
          <Grid item xs="auto">
            <Link to={`/setUpShop/4/${shopId}`}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{ marginBottom: '2rem' }}
                onClick={() => submitChange()}
              >
                Next Step
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default StoreSetUpPage3
