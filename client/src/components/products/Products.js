import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/api/v1/products')
      .then(response => response.json())
      .then(setProducts)
      .catch(error => console.log(error))
  }, [])

  return (
    <Grid
      container
      columnSpacing={6}
      rowSpacing={2}
      className="products"
      sx={{ paddingTop: '10px' }}
    >
      {products.map(({ id, title, description, image, price, rating }) => (
        <Grid item xs={4} sx={{ paddingTop: '0px' }}>
          <Link to={`/products/${id}`}>
            <Product
              key={id}
              title={title}
              image={image}
              price={price}
              rating={rating}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default Products
