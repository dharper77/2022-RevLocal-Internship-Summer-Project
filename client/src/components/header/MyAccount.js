import React from 'react'
import { Grid } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Img from '../../store/imgs/avatar.jpg'

const MyAccount = () => {
  return (
    <Grid 
    container
    columns={{ xs: 12 }}
    sx={{
        padding: '0px',
      }}
    >
        <Grid item sx={3} justifyContent='center'>
                <IconButton sx={{ padding: '0px'}} justifyContent= 'center'>
                <Avatar src={Img} sx={{ height: '28px', width: '28px' }}/> 
                </IconButton>  
        </Grid>
        <Grid item sx={9} direction="column" justifyContent= 'center'>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="Age"
                //onChange={handleChange}
                size="small"
                className='select-catagories'
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select> 
        </Grid>
    </Grid>
  )
}


export default MyAccount