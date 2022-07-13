import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Product from '../components/products/Product'

export const ProfilePage = ({ seller }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [myProducts, setMyProducts] = useState(null)

  useEffect(() => {
    fetch(`/api/v1/products/page/${currentPage}/seller/${seller}`)
      .then(response => response.json())
      .then(data => setMyProducts(data.docs))
      .catch(err => console.log(err))
  }, [])

  return (
    myProducts && (
      <>
        <h2>My Listings</h2>
        <Grid
          container
          columnSpacing={6}
          rowSpacing={2}
          className="products"
          sx={{ paddingTop: '10px' }}
        >
          {myProducts.map(({ _id, title, image, price, rating }) => (
            <Grid item xs={3} sx={{ paddingTop: '0px' }} key={_id}>
              <Link to={`/products/id/${_id}`}>
                <Product
                  id={_id}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                  editable={true}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </>
    )
  )
}

export const mapStateToProps = state => {
  return {
    seller: state.logIn.loggedInUser
  }
}
export default connect(mapStateToProps)(ProfilePage)
