import React from 'react'
import { Grid } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { SelectUnstyled } from '@mui/base'

const age = 20
const Categories = () => {
  return (
    <Grid 
    container
    sx={{
        padding: '0px',
      }}
    >
        <Grid item  sx={{ padding: '25px'}}>
            <SelectUnstyled
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                //onChange={handleChange}
                //size="small"
                className='select-catagories'
            >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </SelectUnstyled> 
        </Grid>
    </Grid>
  )
}


export default Categories