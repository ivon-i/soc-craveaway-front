import { Typography, Stack} from "@mui/material"
import { HiMenu } from 'react-icons/hi'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
  // <Stack direction='row' spacing ={8} size = '90px'> 
  // {/* spacing was 14, changed to 8 to fit auth links */}
  // <img alt = 'icon' />
  // <Typography>CraveAway</Typography>
  // <a href="/api/auth/login">Login</a>
  // <a href="/api/auth/logout">Logout</a>

      
  // <HiMenu onClick ={()=>console.log('Hello')}/>
  //   </Stack>
    
    <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <HiMenu/>
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>Home</MenuItem>
      <MenuItem onClick={handleClose}>My profile</MenuItem>
      <MenuItem onClick={handleClose} href="/pages/createrecipe">Create recipe</MenuItem>
      <MenuItem onClick={handleClose} href="/api/auth/login">Login</MenuItem>
    </Menu>
  </div>
);
}

export default Navbar