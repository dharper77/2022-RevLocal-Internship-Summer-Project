import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header/Header'
import { Grid } from '@mui/material'

const ProductPage = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/v1/products/${id}`)
      .then(response => response.json())
      .then(product => setProduct(product))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={4}>
          <img src={product.image} alt={product.title} />
        </Grid>
        <Grid item xs={8}>
          {product.title}
        </Grid>
      </Grid>
    </>
  )
}

export default ProductPage
