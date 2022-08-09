import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Container,
  Hidden,
  Menu,
  MenuItem,
} from '@mui/material';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Image from 'next/image';
import logoNewCaps from '/public/logoNewCaps.svg';
import Input from './Input';
import SwipeableTemporaryDrawer from '../components/navbar drawer';
import { useRouter } from 'next/router';
import { ConstructionOutlined } from '@mui/icons-material';

export const Navbar = ({ searchInput, setSearchInput, trigger }) => {
  const router = useRouter();
  console.log(router);
  const [el, setEl] = useState(null);
  // this state captures the value from two inputs because the visibility of each input changes depending on viewport size
  const [input, setInput] = useState('');
  const openMenu = (event) => {
    setEl(event.currentTarget);
  };
  // capturing input value
  function handleInputChange(e) {
    console.log('inputValue', e.target.value);
    setInput(e.target.value);
  }
  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: '#fff' }}>
        <Container maxWidth="lg" sx={{ backgroundColor: '#fff' }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <Link href="/">
                <Image src={logoNewCaps} width={220} height={48} />
              </Link>
            </Box>
            <Hidden mdDown>
              {router.pathname === '/' ? (
                <Input
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                  trigger={trigger}
                />
              ) : null}
            </Hidden>
            <Hidden mdUp>
              <MenuIcon onClick={openMenu} />
            </Hidden>
            {/* <Menu
              sx={{ '& a': { color: 'black' } }}
              anchorEl={el}
              open={Boolean(el)}
              onClose={() => setEl(null)}
            >
              <MenuItem>
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/about">About</Link>
              </MenuItem>
            </Menu> */}
            {/* On Medium screen sizes and below the search bar input is hidden: It needs to be positioned below the Navbar instead of being hidden */}
            <Hidden mdDown>
              <Box
                sx={{
                  '& a': {
                    marginLeft: '16px',
                    textDecoration: 'none',
                    color: '#34393C',
                  },
                }}
              >
                {/* <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">All Recipes</Link> */}
              </Box>
              {/* <AccountCircleIcon /> */}
              <SwipeableTemporaryDrawer />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      {/* The search input is now visible below the Navbar when the screen is on small devices */}
      {/* <Hidden mdUp>
        <Input
          onChange={handleInputChange}
          sx={{ margin: '48px 24px 0 24px' }}
        />
      </Hidden> */}
    </>
  );
};
