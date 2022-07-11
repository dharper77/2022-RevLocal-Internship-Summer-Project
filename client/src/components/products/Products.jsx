import React from 'react'
import { useEffect, useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import Product from './Product'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import '../../style/products.css'
import { setPage, setTotalPages } from '../../store/reducers/pageReducer'
import axios from 'axios'

const Products = ({ selectedCategories, totalPages }) => {
  const dispatch = useDispatch()
  const { page } = useParams()
  const navigate = useNavigate()

  const [currentPage, setCurrentPage] = useState(page)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const goToFirstPage = categoriesQueryString => {
    navigate(`/${1}`)
    dispatch(setPage(1))
    fetch(`/api/v1/products/page/1/${categoriesQueryString}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.docs)
        dispatch(setTotalPages(data.totalPages))
      })
      .then(setIsLoading(false))
      .catch(error => console.log(error))
  }

  // TODO - create a separate endpoint for category pages, then create a different useEffect
  useEffect(() => {
    // determines whether to query categories
    if (selectedCategories.length > 0) {
      // creates query string from selectedCategories array
      let categoriesQueryString = '?categories='
      for (let i = 0; i < selectedCategories.length; i++) {
        categoriesQueryString += `${selectedCategories[i]},`
      }
      fetch(`/api/v1/products/page/${currentPage}/${categoriesQueryString}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data.docs)
          dispatch(setTotalPages(data.totalPages))
          if (data.totalPages < 2) {
            goToFirstPage(categoriesQueryString)
          }
        })
        .then(setIsLoading(false))
        .catch(error => console.log(error))
    } else {
      navigate(`/${currentPage}`)
      //updates redux page state for use w/ logo
      dispatch(setPage(currentPage))
      fetch(`/api/v1/products/page/${currentPage}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data.docs)
          dispatch(setTotalPages(data.totalPages))
        })
        .then(setIsLoading(false))
        .catch(error => console.log(error))
    }
  }, [selectedCategories, currentPage])

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
                navigate(`/${page}`)
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
