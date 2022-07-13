import React from 'react'
import {
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Button,
  TextField
} from '@mui/material'
import { connect } from 'react-redux'
import ProductInCart from '../components/cart/ProductInCart'
import '../style/checkout.css'

export const CheckoutPage = ({ cart, subtotal, totalItemsInCart }) => {
  const [value, setValue] = React.useState('')

  const handleRadioChange = event => {
    setValue(event.target.value)
  }

  let shipping = 0.0
  let tax = 0.0

  const nextDayPrice = (subtotal * 0.5).toFixed(2)

  const threeDayPrice = (subtotal * 0.2).toFixed(2)

  return (
    <>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid
          item
          xs={6}
          className="checkout-products"
          sx={{ borderRadius: '10px', marginRight: '1rem' }}
        >
          <h3 className="checkout-header">Review Cart and Shipping</h3>
          {cart.length > 0 ? (
            <>
              {cart.map(product => (
                <ProductInCart
                  key={product.product}
                  id={product.product}
                  price={product.price}
                  quantity={product.quantity}
                />
              ))}
            </>
          ) : (
            <h1>Cart is Empty</h1>
          )}
          <h3 className="checkout-shipping-text">Shipping</h3>
          <Grid
            container
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: '0px',
              height: '10rem'
            }}
          >
            <Grid item xs={8} sx={{ display: 'flex' }}>
              <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel
                  value="3 Day"
                  control={<Radio />}
                  label={
                    subtotal > 100 ? (
                      <h3 className="checkout-shipping">Free 3 Day Shipping</h3>
                    ) : (
                      <h3 className="checkout-shipping">
                        <b>${threeDayPrice}</b> for 3 Day Shipping
                      </h3>
                    )
                  }
                />
                <FormControlLabel
                  value="Next Day"
                  control={<Radio />}
                  label={
                    <h3 className="checkout-shipping">
                      <b>${nextDayPrice}</b> for Next Day Shipping
                    </h3>
                  }
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ border: '1px solid black', borderRadius: '10px' }}
        >
          <Grid
            container
            sx={{ padding: '0px', justifyContent: 'space-between' }}
          >
            <Grid item sx={{ padding: '0px' }}>
              {totalItemsInCart < 2 ? (
                <p>Subtotal ({totalItemsInCart} item) </p>
              ) : (
                <p>Subtotal ({totalItemsInCart} items) </p>
              )}
              <p>Shipping</p>
              <p>Tax</p>
            </Grid>
            <Grid item sx={{ padding: '0px' }}>
              <p className="checkout-totals">${subtotal.toFixed(2)}</p>
              {value === '3 Day' && subtotal >= 100 && (
                <p className="checkout-totals">Free</p>
              )}
              {value === '3 Day' && subtotal < 100 && (
                <p className="checkout-totals">
                  ${(shipping = subtotal * 0.2).toFixed(2)}
                </p>
              )}
              {value === 'Next Day' && (
                <p className="checkout-totals">
                  ${(shipping = subtotal * 0.5).toFixed(2)}
                </p>
              )}
              {value !== '3 Day' && value !== 'Next Day' && (
                <p className="checkout-totals">$0.00</p>
              )}
              <p className="checkout-totals">
                ${(tax = subtotal * 0.07).toFixed(2)}
              </p>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            sx={{ padding: '0px', justifyContent: 'space-between' }}
          >
            <Grid item sx={{ padding: '0px' }}>
              <p className="checkout-order-total">Order Total</p>
            </Grid>
            <Grid item sx={{ padding: '0px' }}>
              <p className="checkout-totals">
                ${(shipping + subtotal + tax).toFixed(2)}
              </p>
            </Grid>
          </Grid>
          <Button variant="contained" className="checkout-button">
            Place Order
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ justifyContent: 'center', paddingTop: '0px' }}>
        <Grid
          item
          xs={6}
          className="checkout-products"
          sx={{ borderRadius: '10px', marginRight: '1rem' }}
        >
          <h3 className="checkout-header">Shipping Address</h3>
          <Grid
            container
            sx={{ justifyContent: 'space-evenly', padding: '0px' }}
          >
            <Grid item sx={{ padding: '0px' }} xs={5.5}>
              <TextField
                label="First Name"
                size="medium"
                className="checkout-input"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item sx={{ padding: '0px' }} xs={5.5}>
              <TextField
                label="Last Name"
                size="medium"
                className="checkout-input"
                sx={{ width: '100%' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  )
}
export const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    subtotal: state.cart.subtotal,
    totalItemsInCart: state.cart.totalItemsInCart
  }
}
export default connect(mapStateToProps)(CheckoutPage)
