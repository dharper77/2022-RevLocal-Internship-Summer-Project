import React, { useState } from 'react'
import { Badge, Grid, Drawer, ClickAwayListener } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'
import { useEffect } from 'react'
import { store } from '../../store/store'
import '../../style/Header.css'

const ShoppingCart = () => {
  const state = store.getState()
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [open, setOpen] = useState(false)
  const [cartContents, setCartContents] = useState([])
  let all = []
  useEffect(() => {
    let total = 0

    state.cart.cart.forEach(el => (total += el.quantity))
    setQuantityInCart(total)
    state.cart.cart.forEach(el =>
      fetch(`/api/v1/products/id/${el.product}`)
        .then(response => response.json())
        .then(product => {
          all.push(product[0])
        })
        .then(setCartContents(all))

        .catch(error => console.log(error))
    )
  }, [state.cart.cart])

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
          >
            {console.log(cartContents.length)}
            {console.log(cartContents)}
            {cartContents.length !== 0 ? (
              cartContents.map(e => (
                <div className="product-listing2" key={e._id}>
                  <img
                    className="product-listing-image2"
                    src={e.image}
                    alt={e.title}
                  />
                  <div>
                    <h3 className="product-title2">
                      {e.title.length > 40
                        ? `${e.title.substring(0, 40)}...`
                        : e.title}
                    </h3>
                    <h3 className="price2">${e.price}</h3>
                  </div>
                </div>
              ))
            ) : (
              <div>No Items In Cart</div>
            )}
          </Drawer>
        </ClickAwayListener>
      </Grid>
    </Grid>
  )
}

export default ShoppingCart
