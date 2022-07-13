import React from 'react'
import { useEffect, useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import Product from './Product'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import '../../style/products.css'
import { setTotalPages } from '../../store/reducers/pageReducer'

const Products = ({ selectedCategories, totalPages, searchBarInput }) => {
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchAllProducts = () => {
    fetch(`/api/v1/products/page/${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.docs)
        dispatch(setTotalPages(data.totalPages))
      })
      .then(setIsLoading(false))
      .catch(error => console.log(error))
  }

  const fetchProductsByCategory = () => {
    let categories = ''
    for (let i = 0; i < selectedCategories.length; i++) {
      categories += `${selectedCategories[i]},`
    }
    fetch(`/api/v1/products/page/${currentPage}/category/${categories}`)
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
      fetchAllProducts()
    } else {
      fetchProductsByCategory()
    }
  }, [currentPage])

  useEffect(() => {
    if (selectedCategories.length === 0) {
      fetchAllProducts()
    } else {
      setCurrentPage(1)
      fetchProductsByCategory()
    }
  }, [selectedCategories])

  useEffect(() => {
    if (searchBarInput === '') {
      fetchAllProducts()
    } else {
      fetch(`/api/v1/products/page/${currentPage}/title/${searchBarInput}`)
        .then(response => response.json())
        .then(data => {
          setProducts(data.docs)
          dispatch(setTotalPages(data.totalPages))
        })
        .then(setIsLoading(false))
        .catch(error => console.log(error))
    }
  }, [searchBarInput])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {products.map(({ _id, title, image, price }) => (
            <Grid item xs={4} sx={{ paddingTop: '0px' }} key={_id}>
              <Link to={`/products/id/${_id}`}>
                <Product
                  id={_id}
                  title={title}
                  image={image}
                  price={price}
                  editable={false}
                />
              </Link>
            </Grid>
          ))}
          {totalPages > 1 && (
            <Grid container justifyContent="center">
              <Grid item>
                <Pagination
                  count={totalPages}
                  shape="rounded"
                  page={currentPage}
                  onChange={(event, page) => {
                    setCurrentPage(page)
                  }}
                />
              </Grid>
            </Grid>
          )}
        </>
      )}
    </>
  )
}

const mapStateToProps = state => {
  return {
    selectedCategories: state.selectedCategories.selectedCategories,
    totalPages: state.page.totalPages,
    searchBarInput: state.searchbar.input
  }
}
export default connect(mapStateToProps)(Products)
