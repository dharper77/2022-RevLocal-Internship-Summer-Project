import { Autocomplete, Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import '../style/PostNewProduct.css'
import {
  setCategory,
  setDescription,
  setImage,
  setPrice,
  setTitle
} from '../store/reducers/postNewProductReducer'
import Header from '../components/header/Header'

const PostNewProduct = ({ title, price, description, category, image }) => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/api/v1/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.log(error))
  }, [])

  const handleSubmit = async () => {
    try {
      await axios.post('/api/v1/products', {
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

  return (
    <>
      <Header />
      <h1 style={{ paddingTop: '3rem', paddingLeft: '2rem', margin: '0px' }}>
        Add a new product
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
            fullWidth
            size="small"
            onChange={event => dispatch(setTitle(event.target.value))}
          />

          <h3 style={{ marginTop: '3rem' }}>Description</h3>
          <TextField
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
                fullWidth
                id="price"
                size="small"
                onChange={event => dispatch(setPrice(event.target.value))}
              />
            </Grid>
            <Grid item xs={12} sx={{ padding: '0px' }}>
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                fullWidth
                id="submit"
                sx={{ marginTop: '3rem' }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = state => {
  return {
    title: state.newProductListingDraft.title,
    price: state.newProductListingDraft.price,
    description: state.newProductListingDraft.description,
    category: state.newProductListingDraft.category,
    image: state.newProductListingDraft.image
  }
}

export default connect(mapStateToProps)(PostNewProduct)
