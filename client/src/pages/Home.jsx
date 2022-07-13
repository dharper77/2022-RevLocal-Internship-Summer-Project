import React from 'react'
import Header from '../components/header/Header'
import Products from '../components/products/Products'
import '../style/App.css'
import Sidebar from '../components/sidebar/SideBar'
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { resetCategories } from '../store/reducers/selectCategoriesReducer'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetCategories())
  }, [])

  return (
    <>
      <Header />
      <Grid container sx={{ padding: '0px' }}>
        <Grid
          container
          xs={2.5}
          className="sidebar-grid"
          sx={{ paddingLeft: '0px', paddingRight: '0px' }}
        >
          <Sidebar />
        </Grid>
        <Grid
          container
          columnSpacing={2}
          rowSpacing={2}
          xs={9.5}
          className="products"
          justifyContent="flex-start"
          sx={{ paddingTop: '25px', width: '100%' }}
        >
          <Products />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
