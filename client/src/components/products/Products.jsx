import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Product from './Product'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Products = ({ selectedCategories }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/v1/products')
      .then(response => response.json())
      .then(setProducts)
      .then(setIsLoading(false))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    let temp = products.filter(
      product =>
        selectedCategories.includes(product.category) ||
        selectedCategories.length === 0
    )
    setFilteredProducts(temp)
  }, [products, selectedCategories])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid
          container
          columnSpacing={6}
          rowSpacing={2}
          className="products"
          sx={{ paddingTop: '10px' }}
        >
          {filteredProducts.map(({ id, title, image, price, rating }) => (
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
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    selectedCategories: state.selectedCategories.selectedCategories
  }
}
export default connect(mapStateToProps)(Products)
