import React from 'react'
import { useEffect, useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import Product from './Product'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import '../../style/products.css'
import { setTotalPages } from '../../store/reducers/pageReducer'

const Products = ({ selectedCategories, totalPages }) => {
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProductsByCategory = () => {
    let categories = ''
    for (let i = 0; i < selectedCategories.length; i++) {
      categories += `${selectedCategories[i]},`
    }
    fetch(`/api/v1/products/page/${currentPage}/${categories}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.docs)
        dispatch(setTotalPages(data.totalPages))
      })
      .then(setIsLoading(false))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if (selectedCategories.length === 0) {
      fetch(`/api/v1/products/page/${currentPage}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data.docs)
          dispatch(setTotalPages(data.totalPages))
        })
        .then(setIsLoading(false))
        .catch(error => console.log(error))
    } else {
      fetchProductsByCategory()
    }
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
    fetchProductsByCategory()
  }, [selectedCategories])

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
          {products.map(({ _id, title, image, price, rating }) => (
            <Grid item xs={4} sx={{ paddingTop: '0px' }} key={_id}>
              <Link to={`/products/id/${_id}`}>
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
              count={totalPages}
              shape="rounded"
              page={currentPage}
              onChange={(event, page) => {
                setCurrentPage(page)
              }}
            /> // TODO - figure out how to get the page you want
          )}
        </Grid>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    selectedCategories: state.selectedCategories.selectedCategories,
    totalPages: state.page.totalPages
  }
}
export default connect(mapStateToProps)(Products)
