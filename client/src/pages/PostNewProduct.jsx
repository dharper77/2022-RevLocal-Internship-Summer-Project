import { Button, Grid, TextField } from '@mui/material'
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
      <h1>Add a new product</h1>
      <Grid
        container
        justifyContent={'center'}
        alignItems={'flex-start'}
        display={'flex'}
        flexDirection={'row'}
        className="new-product"
      >
        {/* Title field */}
        <Grid item xs={4}>
          <h3>Title</h3>
          <TextField
            size="small"
            type="text"
            onChange={event => dispatch(setTitle(event.target.value))}
          />
        </Grid>

        {/* Price field */}
        <Grid item xs={4}>
          <h3>Price</h3>
          <TextField
            size="small"
            type="text"
            onChange={event => dispatch(setPrice(event.target.value))}
          />
        </Grid>

        {/* Description field */}
        <Grid item xs={4}>
          <h3>Description</h3>
          <TextField
            multiline
            id="description"
            onChange={event => dispatch(setDescription(event.target.value))}
          />
        </Grid>

        {/* Category field */}
        <Grid item xs={4}>
          <h3>Category</h3>
          <select onChange={event => dispatch(setCategory(event.target.value))}>
            {categories.map(category => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </Grid>

        {/* Image field */}
        <Grid item xs={4}>
          <h3>Image</h3>
          <TextField
            size="small"
            type="text"
            onChange={event => dispatch(setImage(event.target.value))}
          />
        </Grid>

        {/* Submit button */}
        <Grid item xs={4}>
          <Button variant="contained" onClick={() => handleSubmit()}>
            Submit
          </Button>
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
