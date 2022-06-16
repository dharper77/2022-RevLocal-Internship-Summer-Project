import React from 'react'
import { Grid } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import IconButton from '@mui/material/IconButton'

const ShoppingCart = () => {
  return (
    <Grid 
    container
    sx={{
        padding: '0px',
        justifyContent: 'right'
      }}
    >
        <Grid item className="shopping-cart" sx={{  padding: '26px', paddingRight: '30px'}}>
                <IconButton sx={{ justifyContent: 'center', padding: '0px'}}>
                    <ShoppingCartIcon sx={{ width: '2.5rem', height: '2.5rem' }}/>
                </IconButton>  
        </Grid>
    </Grid>
  )
}


export default ShoppingCart