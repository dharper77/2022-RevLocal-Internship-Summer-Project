import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Img from '../../store/imgs/avatar.jpg'

const MyAccount = () => {
  return (
    <Grid 
    container
    sx={{
        padding: '0px',
      }}
    >
        <Grid item justifyContent='center'  sx={{ padding: '26px'}}>
                <IconButton sx={{ padding: '0px'}}>
                <Avatar src={Img}  sx={{ width: '2.5rem', height: '2.5rem', padding: '0px'}} /> 
                </IconButton>  
        </Grid>
    </Grid>
  )
}


export default MyAccount