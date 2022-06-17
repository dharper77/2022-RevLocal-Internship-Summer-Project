import React from 'react'
import { Grid } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { SelectUnstyled } from '@mui/base'
import Button from '@mui/material/Button';

const age = 20
const Categories = () => {
  return (
    <Grid 
    container
    sx={{
        padding: '0px',
      }}
    >
        <Grid item  sx={{ padding: '26px'}}>
        <Button
        sx={{ width: '2.5rem', height: '2.5rem', padding: '0px'}}
        onClick={() => {
        alert('clicked');
        }}
        >
        Log In
        </Button>
        </Grid>
    </Grid>
  )
}


export default Categories