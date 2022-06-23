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
        <Grid item xs={3} className='sidebar-grid'>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Products />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
