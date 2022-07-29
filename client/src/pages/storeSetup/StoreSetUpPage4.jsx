import {
  Alert,
  Autocomplete,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import '../../style/PostNewProduct.css'
import {
  setCategory,
  setDescription,
  setImage,
  setPrice,
  setTitle
} from '../../store/reducers/postNewProductReducer'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import ArrowBack from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import '../../style/SetUpStore.css'
import { useParams } from 'react-router-dom'

const StoreSetUpPage4 = ({
  sellerId,
  sellerName,
  title,
  price,
  description,
  category,
  image
}) => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [open, setOpen] = useState(false)
  const { shopId } = useParams()

  useEffect(() => {
    fetch('/api/v1/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.log(error))
  }, [])

  const submitChange = async () => {
    try {
      await axios.post('/api/v1/products', {
        seller: {
          id: sellerId,
          name: sellerName
        },
        title,
        price,
        description,
        category,
        image,
        rating: {
          rate: 0,
          count: 0
        }
      })
      setOpen(true)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <>
      <Header />
      <Grid container alignItems={'space-between'} sx={{ height: '100%' }}>
        <Grid container justifyContent={'center'} alignItems={'center'}>
          <Grid
            item
            sx={{
              width: '75%',
              border: '0.0625rem solid black',
              borderRadius: '0.625rem',
              padding: '0rem',
              paddingBottom: '1rem'
            }}
          >
            <Typography
              variant="h4"
              className="typo"
              sx={{ paddingLeft: '3.75rem', paddingTop: '2.5rem' }}
            >
              Post New Product
            </Typography>
            <Grid
              container
              justifyContent={'space-around'}
              alignItems={'flex-start'}
              flexDirection={'row'}
              sx={{ padding: '0rem' }}
            >
              {/* Title and Description fields */}
              <Grid item xs={5} className="new-product">
                <h3>Title</h3>
                <TextField
                  fullWidth
                  size="small"
                  onChange={event => dispatch(setTitle(event.target.value))}
                />

                <h3 style={{ marginTop: '3rem' }}>Description</h3>
                <TextField
                  fullWidth
                  multiline
                  id="description"
                  onChange={event =>
                    dispatch(setDescription(event.target.value))
                  }
                  className="textfield"
                />
              </Grid>

              {/* Image and Category fields */}
              <Grid item xs={5} className="new-product">
                <h3>Image URL</h3>
                <TextField
                  fullWidth
                  size="small"
                  onChange={event => dispatch(setImage(event.target.value))}
                />

                <Grid
                  container
                  justifyContent={'space-between'}
                  alignItems={'flex-start'}
                  display={'flex'}
                  flexDirection={'row'}
                  sx={{ paddingLeft: '0rem', paddingRight: '0rem' }}
                >
                  <Grid
                    item
                    xs={5.5}
                    sx={{
                      paddingLeft: '0rem',
                      paddingRight: '0rem'
                    }}
                  >
                    <h3 style={{ marginTop: '1rem' }}>Category</h3>
                    <Autocomplete
                      sx={{ height: '4.5rem', padding: '0rem' }}
                      freeSolo
                      forcePopupIcon
                      fullWidth
                      options={categories}
                      onInputChange={(event, input) =>
                        dispatch(setCategory(input))
                      }
                      renderInput={params => <TextField {...params} label="" />}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={5.5}
                    sx={{ paddingLeft: '0rem', paddingRight: '0rem' }}
                  >
                    <h3 style={{ marginTop: '1rem' }}>Price</h3>
                    <TextField
                      fullWidth
                      id="price"
                      size="small"
                      onChange={event => dispatch(setPrice(event.target.value))}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          sx={{ height: '2.5rem' }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: '100%', opacity: '100' }}
          >
            Successfully listed!
          </Alert>
        </Snackbar>
        <Grid container item justifyContent="space-between" alignItems="center">
          <Grid item xs="auto">
            <Link to={`/setUpShop/3/${shopId}`}>
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
            <Stepper activeStep={2} alternativeLabel>
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
                Finalize Shop
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = state => {
  return {
    sellerId: state.logIn.loggedInUser.userId,
    sellerName: state.logIn.loggedInUser.username,
    title: state.newProductListingDraft.title,
    price: state.newProductListingDraft.price,
    description: state.newProductListingDraft.description,
    category: state.newProductListingDraft.category,
    image: state.newProductListingDraft.image
  }
}

export default connect(mapStateToProps)(StoreSetUpPage4)
