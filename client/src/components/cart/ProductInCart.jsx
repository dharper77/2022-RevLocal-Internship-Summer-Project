import React from 'react'
import { Divider, Grid, Button } from '@mui/material'
import '../../style/Header.css'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from '../../store/reducers/cartReducer'
import { useDispatch, useStore } from 'react-redux'

const ProductInCart = ({ id, title, image, price, quantity }) => {
  const dispatch = useDispatch()
  const store = useStore()
  const state = store.getState()
  const removeButtonOnClick = () => {
    quantity === 1
      ? dispatch(removeFromCart({ quantity: 1, product: id, price: price }))
      : dispatch(decrementQuantity({ product: id, price: price }))
  }

  const found = state.cart.cart.find(el => el.product === id)

  return (
    found && (
      <>
        <Grid container sx={{ height: '15rem' }}>
          <Grid item xs={4}>
            <img src={image} alt={title} />
          </Grid>
          <Grid item xs={8}>
            <h3 className="cart-title">
              {title.length > 25 ? `${title.substring(0, 25)}...` : title}
            </h3>
            {quantity > 1 ? (
              <p className="cart-price">
                {`$${price * quantity}  ($${price} x ${quantity})`}
              </p>
            ) : (
              <p className="cart-price">{`$${price * quantity}`}</p>
            )}
            <Grid
              container
              sx={{
                height: '5rem',
                justifyContent: 'center',
                alignItems: 'center'
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
                  <RemoveIcon />
                </Button>
              </Grid>

              <Grid item xs={7} sx={{ padding: '0px', maxHeight: '2rem' }}>
                <p className="cart-quantity">Quantity: {quantity}</p>
              </Grid>
              <Grid item xs={2} sx={{ padding: '0px', maxHeight: '2rem' }}>
                <Button
                  sx={{ padding: '0px', minWidth: '100%' }}
                  variant="contained"
                  onClick={() =>
                    dispatch(incrementQuantity({ product: id, price: price }))
                  }
                >
                  <AddIcon />
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
