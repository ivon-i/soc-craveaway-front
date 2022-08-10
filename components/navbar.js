import { Typography, Stack } from '@mui/material';
import { HiMenu } from 'react-icons/hi';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import CravLogo from '../extras/crawaaa-removebg-preview.png';
import { margin } from '@mui/system';
import text from '../extras/Text.png';
import SwipeableTemporaryDrawer from './navbar drawer';


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
    <Stack
      direction="row"
      spacing={10}
      width="110vw"
      justifyContent="space-around"
      sx={{
        position: 'sticky',
        padding: '6px',
      }}
      backgroundColor="#D7D7D7"
    >
      <>
        <Image src={CravLogo} alt="icon" width="80px" height="60px" />
      </>
      <>
        <Image src={text} alt="text" width="150px" height="20px" />
      </>
      {/* <Typography sx={{
        fontSize: "x-large",
        justifyContent: "fixed",
        display: "center",
        color: "#FE724C",
  }}>CraveAway</Typography> */}
      {/* <div>
    <Button
      id="basic-button"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
      sx={{fontSize: 'xx-large', color:'#272D2F', ml:"50px"}}
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
        

      </div> */}
      <SwipeableTemporaryDrawer />
    </Stack>
  );
};

export default Navbar;
