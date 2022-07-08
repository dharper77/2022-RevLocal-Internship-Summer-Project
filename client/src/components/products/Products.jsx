import React from 'react'
import { useEffect, useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import Product from './Product'
import { Link, useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import '../../style/products.css'
import { setTotalPages } from '../../store/reducers/pageReducer'

const Products = ({ selectedCategories }) => {
  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const { page } = useParams()

  useEffect(() => {
    console.log(page)
    fetch(`/api/v1/products/page/${page}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data)
        dispatch(setTotalPages((data.totalPages)))
      })
      .then(setIsLoading(false))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (products) {
      let temp = products.docs.filter(
        product =>
          selectedCategories.includes(product.category) ||
          selectedCategories.length === 0
      )
      setFilteredProducts(temp)
    }
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
          {filteredProducts.map(({ _id, title, image, price, rating }) => (
            <Grid item xs={4} sx={{ paddingTop: '0px' }} key={_id}>
              <Link to={`/products/${_id}`}>
                <Product
                  title={title} 
                  image={image}
                  price={price}
                  rating={rating}
                />
              </Link>
            </Grid>
          ))}
          {products && (
            <Pagination
              count={products.totalPages}
              shape="rounded"
              onChange={(event, page) => changePage(page)}
            /> // TODO - figure out how to get the page you want
          )}
        </Grid>
      )}
    </>
  )
}

const changePage = page => {}

const mapStateToProps = state => {
  return {
    selectedCategories: state.selectedCategories.selectedCategories,
    currentPage: state.page.page
  }
}
export default connect(mapStateToProps)(Products)
