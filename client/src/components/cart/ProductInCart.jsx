import React, { useState, useEffect } from 'react'
import { Divider, Grid, Button } from '@mui/material'
import '../../style/Header.css'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'

const ProductInCart = ({ id, price, quantity }) => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState(null)

  const removeButtonOnClick = () => {
    quantity === 1
      ? dispatch(removeFromCart({ quantity: 1, product: id, price: price }))
      : dispatch(decrementQuantity({ product: id, price: price }))
  }

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
        <Grid container sx={{ height: '15rem' }}>
          <Grid item xs={4}>
            <img src={product.image} alt={product.title} />
          </Grid>
          <Grid item xs={8}>
            <h3 className="cart-title">
              {product.title.length > 25
                ? `${product.title.substring(0, 25)}...`
                : product.title}
            </h3>
            {quantity > 1 ? (
              <p className="cart-price">
                ${(price * quantity).toFixed(2)} (${price.toFixed(2)} x{' '}
                {quantity})
              </p>
            ) : (
              <p className="cart-price">${(price * quantity).toFixed(2)}</p>
            )}
            <Grid
              container
              sx={{
                height: '5rem',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '0px'
              }}
            >
              <Grid item xs={2} sx={{ padding: '0px', maxHeight: '2rem' }}>
                <Button
                  sx={{ padding: '0px', minWidth: '100%' }}
                  variant="contained"
                  onClick={() => {
                    removeButtonOnClick()
                  }}
                >
                  <RemoveIcon sx={{ height: '2rem' }} />
                </Button>
              </Grid>

              <Grid item xs={3} sx={{ padding: '0px', maxHeight: '2rem' }}>
                <Grid
                  container
                  sx={{
                    padding: '0px',
                    justifyContent: 'center'
                  }}
                >
                  <Grid item sx={{ padding: '0px' }}>
                    <p className="cart-quantity">{quantity}</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2} sx={{ padding: '0px', maxHeight: '2rem' }}>
                <Button
                  sx={{ padding: '0px', minWidth: '100%' }}
                  variant="contained"
                  onClick={() => {
                    dispatch(incrementQuantity({ product: id, price: price }))
                    //setQuantity(quantity + 1)
                  }}
                >
                  <AddIcon sx={{ height: '2rem' }} />
                </Button>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ padding: '0px', maxHeight: '2rem', height: '2rem' }}
              >
                <Button
                  sx={{
                    padding: '0px',
                    minHeight: '2rem'
                  }}
                  onClick={() => {
                    dispatch(
                      removeFromCart({
                        quantity: quantity,
                        product: id,
                        price: price
                      })
                    )
                  }}
                >
                  <DeleteIcon
                    sx={{
                      minWidth: '2rem',
                      minHeight: '2rem'
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
      </>
    )
  )
}

export default ProductInCart
