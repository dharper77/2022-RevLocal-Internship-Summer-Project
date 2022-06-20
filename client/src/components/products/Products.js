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
    <Grid container columnSpacing={3} className='products'>
      {products.map(({ id, title, description, image, price, rating }) => (
        <Grid item xs={4} sx={{ paddingTop: '0px' }}>
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
