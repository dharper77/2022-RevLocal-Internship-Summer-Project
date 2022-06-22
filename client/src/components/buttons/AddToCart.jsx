import React from 'react'
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

const AddToCart = () => {
  return (
    <Button variant="contained" endIcon={<ShoppingCartIcon />}>
      Add to Cart
    </Button>
  )
}

export default AddToCart
