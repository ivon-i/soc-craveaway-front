import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HiMenu } from 'react-icons/hi';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { Login, Logout } from '@mui/icons-material';
import PolicyIcon from '@mui/icons-material/Policy';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const notInList = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          backgroundColor: '#FCC62E',
          color: '#34393C',
        }}
      >
        {[
          <Link href="/" passHref>
            <Typography variant="body1">Home</Typography>
          </Link>,
          <Link href="/profile" passHref>
            <Typography variant="body1">My Profile</Typography>
          </Link>,
          <Link href="/createrecipe" passHref>
            <Typography variant="body1">Create a recipe</Typography>
          </Link>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <HomeIcon alt="Home"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <AccountCircleIcon alt="My Profile"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 2 && (
                  <DinnerDiningIcon alt="Create a recipe"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          background: '#FCC62E',
          color: '#34393C',
        }}
      >
        {[
          <Link href="/api/auth/login" passHref>
            <Typography variant="body1">Login</Typography>
          </Link>,
          'Usage Policy',
          <Link href="/api/auth/login" passHref>
            <Typography variant="body1">Sign Up</Typography>
          </Link>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <Login alt="Login"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <PolicyIcon alt="Usage Policy"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 2 && (
                  <PersonAddIcon alt="Sign up"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const loggedInList = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          background: '#FCC62E',
          color: '#34393C',
        }}
      >
        {[
          <Link href="/" passHref>
            <Typography variant="body1">Home</Typography>
          </Link>,
          <Link href="/profile" passHref>
            <Typography variant="body1">My Profile</Typography>
          </Link>,
          <Link href="/createrecipe" passHref>
            <Typography variant="body1">Create a recipe</Typography>
          </Link>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <HomeIcon alt="Home"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <AccountCircleIcon alt="My Profile"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 2 && (
                  <DinnerDiningIcon alt="Create a recipe"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        sx={{
          background: '#FCC62E',
          color: '#34393C',
        }}
      >
        {[
          <Link href="/api/auth/logout" passHref>
            <Typography variant="body1">Logout</Typography>
          </Link>,
          'Usage Policy',
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <Logout alt="Logout"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <PolicyIcon alt="Usage Policy"
                    sx={{
                      color: '#34393C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <HiMenu
              cursor="pointer"
              fontSize="32px"
              color="#34393C"
              onClick={toggleDrawer(anchor, true)}
              style={{ marginTop: '7px' }}
            />
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {loggedInList(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <HiMenu
              className="burger-menu"
              alt="menu"
              fontSize="32px"
              color="#34393C"
              onClick={toggleDrawer(anchor, true)}
              cursor="pointer"
              style={{ marginTop: '7px' }}
            />
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {notInList(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
