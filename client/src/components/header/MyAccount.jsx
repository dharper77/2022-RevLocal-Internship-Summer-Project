// import React from 'react'
// import { Grid, Tooltip, MenuList, Menu, MenuItem } from '@mui/material'
// import IconButton from '@mui/material/IconButton'
// import Avatar from '@mui/material/Avatar'
// import Img from '../../store/imgs/avatar.jpg'

// const MyAccount = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null)
//   const open = Boolean(anchorEl)
//   const handleClick = event => {
//     setAnchorEl(event.currentTarget)
//   }
//   const handleClose = () => {
//     setAnchorEl(null)
//   }
//   return (
//     <Grid
//       container
//       sx={{
//         padding: '0px'
//       }}
//     >
//       <Grid item justifyContent="center" sx={{ padding: '26px' }}>
//         <Tooltip title="Account Settings">
//           <IconButton sx={{ padding: '0px' }} onClick={handleClick}>
//             <Avatar
//               src={Img}
//               sx={{ width: '2.5rem', height: '2.5rem', padding: '0px' }}
//             />
//           </IconButton>
//         </Tooltip>
//       </Grid>
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//       >
//         <MenuItem>Selling</MenuItem>
//       </Menu>
//     </Grid>
//   )
// }

// export default MyAccount
import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import Img from '../../store/imgs/avatar2.jpg'

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar
            sx={{ width: '2.5rem', height: '2.5rem', padding: '0px' }}
            src={Img}
          />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        marginThreshold={0}
        sx={{ maxHeight: '11.5rem' }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to="/myProfile">
          <MenuItem>Profile</MenuItem>
        </Link>
        <Link to="/sell">
          <MenuItem>Sell</MenuItem>
        </Link>
        <Divider sx={{ marginTop: '0.75rem', marginBottom: '0.75rem' }} />
        <MenuItem>
          Settings
          <ListItemIcon sx={{ padding: '0px' }}>
            <Settings fontSize="small" sx={{ paddingLeft: '1.4rem' }} />
          </ListItemIcon>
        </MenuItem>
        <MenuItem>
          Logout
          <ListItemIcon sx={{ padding: '0px' }}>
            <Logout fontSize="small" sx={{ paddingLeft: '2rem' }} />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
