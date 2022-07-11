import React, { useState, useEffect } from 'react'
import { Badge, Grid, Drawer, ClickAwayListener } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { connect } from 'react-redux'
import '../../style/Header.css'
import ProductInCart from '../cart/ProductInCart'
import TotalInCart from '../cart/TotalInCart'

export const ShoppingCart = ({ cart }) => {
  const [open, setOpen] = useState(false)
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [cartContents, setCartContents] = useState([])

  useEffect(() => {
    let all = []
    let total = 0
    cart.forEach(el => (total += el.quantity))
    setQuantityInCart(total)
    cart.forEach(el =>
      fetch(`/api/v1/products/id/${el.product}`)
        .then(response => response.json())
        .then(product => {
          all.push(product[0])
          setCartContents(all)
        })
        .catch(error => console.log(error))
    )
  }, [cart])

  const quantityByProduct = product => {
    const found = cart.find(el => el.product === product._id)
    if (found) {
      return found.quantity
    }
  }

  return (
    <Grid
      container
      sx={{
        padding: '0px',
        justifyContent: 'right',
        alignItems: 'center'
      }}
    >
      <Grid item className="shopping-cart" sx={{ paddingRight: '30px' }}>
        <IconButton onClick={() => setOpen(true)}>
          <Badge badgeContent={quantityInCart} color="error">
            <ShoppingCartIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
          </Badge>
        </IconButton>
        <ClickAwayListener
          onClickAway={() => open && setOpen(false)}
          mouseEvent="onMouseDown"
        >
          <Drawer
            open={open}
            anchor={'right'}
            onClose={() => setOpen(false)}
            variant="persistent"
            PaperProps={{
              sx: { width: '30%' }
            }}
          >
            {cart.length > 0 ? (
              <>
                {cartContents.map(product => (
                  <ProductInCart
                    key={product._id}
                    id={product._id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    quantity={quantityByProduct(product)}
                  />
                ))}
                <TotalInCart />
              </>
            ) : (
              <h1>No Items In Cart</h1>
            )}
          </Drawer>
        </ClickAwayListener>
      </Grid>
    </Grid>
  )
}

export const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(ShoppingCart)
