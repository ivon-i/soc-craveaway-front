import { AppBar, Toolbar, Box, Container, Hidden } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import logoNewCaps from '/public/logoNewCaps.svg';
import Input from './Input';
import SwipeableTemporaryDrawer from '../components/navbar drawer';
import { useRouter } from 'next/router';
export const Navbar = ({ searchInput, setSearchInput, trigger }) => {
  const router = useRouter();
  return (
    <>
      <AppBar position="relative" sx={{ backgroundColor: '#fff' }}>
        <Container maxWidth="lg" sx={{ backgroundColor: '#fff' }}>
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              '& >div': { paddingLeft: '0px', paddingRight: '0px' },
            }}
          >
            <Box
              sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <Link href="/">
                <Image
                  src={logoNewCaps}
                  width={220}
                  height={48}
                  alt="Craveaway home"
                />
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
            <SwipeableTemporaryDrawer />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
