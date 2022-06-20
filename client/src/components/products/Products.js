import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Product from './Product'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/v1/products')
      .then(response => response.json())
      .then(setProducts)
      .catch(error => console.log(error))
  }, [])

  return (
    <Grid container className="productsContainer" columnSpacing={5}>
      {products.map(({ id, title, description, image, price, rating }) => (
        <Grid item xs={3}>
          <Product
            key={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
