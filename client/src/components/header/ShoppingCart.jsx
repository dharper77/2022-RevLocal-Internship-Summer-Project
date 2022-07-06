import React from 'react'
import { Badge, Grid } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { useEffect } from 'react'
import { store } from '../../store/store'
import { useState } from 'react'

const ShoppingCart = () => {
  const state = store.getState()
  const [quantityInCart, setQuantityInCart] = useState(0)

  useEffect(() => {
    let total = 0
    state.cart.cart.forEach(el => (total += el.quantity))
    setQuantityInCart(total)
  }, [state.cart.cart])

  return (
    <Grid
      container
      sx={{
        padding: '0px',
        justifyContent: 'right'
      }}
    >
      <Grid item className="shopping-cart" sx={{ paddingRight: '30px' }}>
        <IconButton>
          <Badge badgeContent={quantityInCart} color="error">
            <ShoppingCartIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
          </Badge>
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default ShoppingCart
