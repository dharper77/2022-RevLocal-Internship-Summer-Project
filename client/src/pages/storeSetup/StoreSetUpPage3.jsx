import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const StoreSetUpPage3 = () => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const { shopId } = useParams()

  const submitChange = async () => {
    try {
      await axios.patch(`/api/v1/shops/id/${shopId}`, {
        description
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <Header />

      <Grid container justifyContent="center" sx={{ padding: '0px' }}>
        <Grid item xs={5}>
          <h3 style={{ marginTop: '3rem' }}>Shop Description</h3>
          <TextField
            fullWidth
            multiline
            id="description"
            onChange={event => dispatch(setDescription(event.target.value))}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          alignItems="center"
          sx={{ paddingTop: '18rem' }}
        >
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
