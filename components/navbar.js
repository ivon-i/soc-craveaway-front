import { Typography, Stack} from "@mui/material"
import { HiMenu } from 'react-icons/hi'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";

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
  <Stack direction='row' spacing ={14} size = '90px'> 
  <img alt = 'icon' />
  <Typography>CraveAway</Typography>

    <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      sx={{fontSize: 'xx-large'}}
    >
      <HiMenu className="burger-menu"/>
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
        <Link href="/" passHref>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link href="/profile" passHref>
          <MenuItem onClick={handleClose}>My profile</MenuItem>
          </Link>
        <Link href="/createrecipe" passHref>
          <MenuItem onClick={handleClose}>Create recipe</MenuItem>
        </Link>
        <Link href="/api/auth/login" passHref>
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>
        <Link href="/api/auth/logout" passHref>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Link>
        </Menu>
        

      </div>
      </Stack>
);
}

export default Navbar