import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'

const CheckoutProducts = ({ id, price, quantity }) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (quantity > 0) {
      fetch(`/api/v1/products/id/${id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data[0])
        })
        .catch(error => console.log(error))
    }
  }, [])

  return (
    product &&
    quantity > 0 && (
      <>
        <Grid container>
          <Grid item xs={3}>
            <img src={product.image} alt={product.title} />
          </Grid>
          <Grid item xs={9}>
            <h3>{product.title}</h3>
            <Grid container sx={{ padding: '0px', justifyContent: '' }}>
              <Grid item xs={4} sx={{ padding: '0px' }}>
                {quantity > 1 ? (
                  <p className="cart-price">
                    {`$${price * quantity}  ($${price} x ${quantity})`}
                  </p>
                ) : (
                  <p className="cart-price">{`$${price * quantity}`}</p>
                )}
              </Grid>
              <Grid item xs={4} sx={{ padding: '0px' }}>
                {product && product.rating && (
                  <Rating
                    className="rating"
                    precision={0.1}
                    value={product.rating.rate}
                    readOnly
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    )
  )
}

export default CheckoutProducts
