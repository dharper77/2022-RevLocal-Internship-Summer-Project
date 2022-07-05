import React, { useEffect, useState } from 'react'
import AddToCart from '../components/buttons/AddToCart'
import { useParams } from 'react-router-dom'
import Header from '../components/header/Header'
import { Grid } from '@mui/material'
import Rating from '@mui/material/Rating'

const ProductPage = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/v1/products/${id}`)
      .then(response => response.json())
      .then(product => {
        setProduct(product[0])
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Header />
      <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid item xs={4} sx={{ padding: '50px', marginTop: '20px' }}>
          <img
            className="product-page-image"
            src={product.image}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={4}>
          <div>
            <h3 className="product-title">{product.title}</h3>
          </div>
          <div className="price-and-rating">
            <h3 className="product-price">${product.price}</h3>
            {product && product.rating ? (
              <Rating
                className="rating"
                precision={0.1}
                value={product.rating.rate}
                readOnly
              />
            ) : (
              'Not Found'
            )}
          </div>
          <div>{product.description}</div>
          <div>
            <AddToCart />
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default ProductPage
