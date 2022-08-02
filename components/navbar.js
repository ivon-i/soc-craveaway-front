import { Typography, Stack} from "@mui/material"
import { HiMenu } from 'react-icons/hi'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import Image from "next/image";
import logo from '../extras/craveawaylogo.png'
import { margin } from "@mui/system";
import text from '../extras/craveawaytext.png'
import SwipeableTemporaryDrawer from "./navbar drawer";

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


    <Stack direction='row' spacing={10} width= '110vw' backgroundColor="#F5BE6B" justifyContent="space-around"
      sx={{
         position: 'sticky', top:"2%", padding: "1px"
    }}>
      <>
        <Image src={logo} alt='icon'
          width="60vw" height="60vh"
          className="logo" sx={{
          }} />
        </>
        <>
          <Image src={text} alt='text'
          width="190vw" height="40vh"
          className="logoText" 
          sx={{
            }} />
      </>
      <SwipeableTemporaryDrawer/>
    </Stack>

);
}

export default Navbar