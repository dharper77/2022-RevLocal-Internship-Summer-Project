import { Autocomplete, Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import '../style/PostNewProduct.css'
import {
  setAllProps,
  setCategory,
  setDescription,
  setImage,
  setPrice,
  setTitle
} from '../store/reducers/editListingReducer'
import Header from '../components/header/Header'
import { useParams } from 'react-router-dom'
import Alert from '../components/buttons/Alert'

const EditListing = (seller, title, price, description, category, image) => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [product, setProduct] = useState(null)
  const [open, setOpen] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetch('/api/v1/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.log(error))

    fetch(`/api/v1/products/id/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data[0])
        dispatch(setAllProps(data[0]))
      })
      .catch(error => console.log(error))
  }, [])

  const handleUpdate = async () => {
    try {
      await axios.post('/api/v1/products', {
        seller,
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
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleDelete = async () => {
    setOpen(true)
    return <Alert open={open} handleClose={setOpen(false)} />
  }

  return (
    product && (
      <>
        <Header />
        <h1 style={{ paddingTop: '3rem', paddingLeft: '2rem', margin: '0px' }}>
          Edit Listing
        </h1>
        <Grid
          container
          justifyContent={'space-around'}
          alignItems={'flex-start'}
          display={'flex'}
          flexDirection={'row'}
        >
          {/* Title and Description fields */}
          <Grid item xs={5} className="new-product">
            <h3>Title</h3>
            <TextField
              defaultValue={product.title}
              fullWidth
              size="small"
              onChange={event => dispatch(setTitle(event.target.value))}
            />

            <h3 style={{ marginTop: '3rem' }}>Description</h3>
            <TextField
              defaultValue={product.description}
              fullWidth
              multiline
              id="description"
              onChange={event => dispatch(setDescription(event.target.value))}
            />
          </Grid>

          {/* Image and Category fields */}
          <Grid item xs={5} className="new-product">
            <h3>Image URL</h3>
            <TextField
              defaultValue={product.image}
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
              sx={{ paddingLeft: '0px', paddingRight: '0px' }}
            >
              <Grid
                item
                xs={5.5}
                sx={{ paddingLeft: '0px', paddingRight: '0px' }}
              >
                <h3 style={{ marginTop: '3rem' }}>Category</h3>
                <Autocomplete
                  sx={{ height: '4.5rem', padding: '0px' }}
                  defaultValue={product.category}
                  freeSolo
                  forcePopupIcon
                  fullWidth
                  options={categories}
                  onInputChange={(event, input) => dispatch(setCategory(input))}
                  renderInput={params => <TextField {...params} label="" />}
                />
              </Grid>
              <Grid
                item
                xs={5.5}
                sx={{ paddingLeft: '0px', paddingRight: '0px' }}
              >
                <h3 style={{ marginTop: '3rem' }}>Price</h3>
                <TextField
                  defaultValue={product.price}
                  fullWidth
                  id="price"
                  size="small"
                  onChange={event => dispatch(setPrice(event.target.value))}
                />
              </Grid>
              <Grid item xs={5.5} sx={{ padding: '0px' }}>
                <Button
                  variant="contained"
                  onClick={() => handleDelete()}
                  fullWidth
                  id="submit"
                  color="error"
                  sx={{ marginTop: '3rem' }}
                >
                  Delete Listing
                </Button>
              </Grid>
              <Grid item xs={5.5} sx={{ padding: '0px' }}>
                <Button
                  variant="contained"
                  onClick={() => handleUpdate()}
                  fullWidth
                  id="submit"
                  sx={{ marginTop: '3rem' }}
                >
                  Update Listing
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  )
}

const mapStateToProps = state => {
  return {
    seller: state.logIn.loggedInUser,
    title: state.editProductListingDraft.title,
    price: state.editProductListingDraft.price,
    description: state.editProductListingDraft.description,
    category: state.editProductListingDraft.category,
    image: state.editProductListingDraft.image
  }
}

export default connect(mapStateToProps)(EditListing)
