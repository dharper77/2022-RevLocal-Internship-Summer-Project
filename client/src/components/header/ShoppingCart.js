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
        justifyContent: 'center'
      }}
    >
        <Grid item className="shopping-cart" sx={{ justifyContent: 'center', width: '100%', padding: '26px'}}>
                <IconButton>
                    <ShoppingCartIcon/>
                </IconButton>  
        </Grid>
    </Grid>
  )
}


export default ShoppingCart