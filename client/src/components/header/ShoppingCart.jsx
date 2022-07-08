import React, { useState } from 'react'
import { Badge, Grid, Drawer, ClickAwayListener } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { useEffect } from 'react'
import { store } from '../../store/store'

const ShoppingCart = () => {
  const state = store.getState()
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [open, setOpen] = useState(false)

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
        <IconButton onClick={() => setOpen(true)}>
          <Badge badgeContent={quantityInCart} color="error">
            <ShoppingCartIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
          </Badge>
        </IconButton>
        <ClickAwayListener onClickAway={setOpen(false)} >
        <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        Hello Shopping Cart
      </Drawer>
      </ClickAwayListener>
      </Grid>
    </Grid>
  )
}

export default ShoppingCart
