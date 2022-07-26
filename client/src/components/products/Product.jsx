import { Button, Grid } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import React from 'react'
import '../../style/products.css'
import '../../style/typography.css'
import { Link } from 'react-router-dom'

const Product = ({ id, title, image, price, editable }) => {
  return (
    id && (
      <Grid
        container
        className="product-listing"
        sx={{
          maxHeight: '25rem',
          width: '100%',
          margin: '0rem'
        }}
      >
        <img className="product-listing-image" src={image} alt={title} />
        <Grid item>
          <h3 className="product-title">
            {title.length > 40 ? `${title.substring(0, 40)}...` : title}
          </h3>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ paddingTop: '0rem', paddingRight: '0rem' }}
        >
          <Grid item sx={{ padding: '0rem' }}>
            <h3 className="price">${price.toFixed(2)}</h3>
          </Grid>
          {editable && (
            <Grid item>
              <Link to={`/editListing/id/${id}`}>
                <Button variant="contained" onClick={() => {}}>
                  <SettingsIcon />
                </Button>
              </Link>
            </Grid>
          )}
        </Grid>
      </Grid>
    )
  )
}

export default Product
