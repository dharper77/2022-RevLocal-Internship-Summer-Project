import React from 'react'
import Header from '../components/header/Header'
import Products from '../components/products/Products'
import '../style/App.css'
import Sidebar from '../components/sidebar/SideBar'
import { Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { resetCategories } from '../store/reducers/selectCategoriesReducer'
import { useEffect } from 'react'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetCategories())
  }, [])

  return (
    <>
      <Header />
      <Grid container sx={{ padding: '0px' }}>
        <Grid item xs={2.5}>
          <Grid
            container
            className="sidebar-grid"
            sx={{ paddingLeft: '0px', paddingRight: '0px' }}
          >
            <Sidebar />
          </Grid>
        </Grid>
        <Grid item xs={9.5}>
          <Grid
            container
            columnSpacing={2}
            rowSpacing={2}
            className="products"
            justifyContent="flex-start"
            sx={{ paddingTop: '25px', width: '100%' }}
          >
            <Products />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
