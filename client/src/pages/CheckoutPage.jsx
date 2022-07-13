import React from 'react'
import { Grid, Radio, RadioGroup, FormControlLabel } from '@mui/material'
import { connect } from 'react-redux'
import ProductInCart from '../components/cart/ProductInCart'
import '../style/checkout.css'

export const CheckoutPage = ({ cart, subtotal }) => {
  const [value, setValue] = React.useState()

  const handleRadioChange = event => {
    setValue(event.target.value)
    console.log(event.target.value)
  }
  const nextDayPrice = (subtotal * 0.5).toFixed(2)

  const threeDayPrice = (subtotal * 0.2).toFixed(2)

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid item xs={6} className="checkout-products">
        <h3>Review Cart and Shipping</h3>
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
                    <p className="checkout-shipping">Free 3 Day Shipping</p>
                  ) : (
                    <h3 className="checkout-shipping">
                      <b>${threeDayPrice}</b> for 3 Day Shipping
                    </h3>
                  )
                }
              />
              <FormControlLabel
                value={nextDayPrice}
                control={<Radio />}
                label={
                  <h3 className="checkout-shipping">
                    <b>${nextDayPrice}</b> for Next Day Shipping
                  </h3>
                }
              />
            </RadioGroup>
          </Grid>
          {/* <Grid item xs={1} sx={{ display: 'flex' }}>
            <>
              {subtotal > 100 ? (
                <p className="checkout-shipping">Free 3 Day Shipping</p>
              ) : (
                <h3 className="checkout-shipping">
                  <b>${(subtotal * 0.2).toFixed(2)}</b> for 3 Day Shipping
                </h3>
              )}
              <h3 className="checkout-shipping">
                <b>${(subtotal * 0.5).toFixed(2)}</b> for Next Day Shipping
              </h3>
            </>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  )
}
export const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    subtotal: state.cart.subtotal
  }
}
export default connect(mapStateToProps)(CheckoutPage)
