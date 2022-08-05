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
  /*
2. Implement auth0 functionality based on previous log in button
3. Return alternative list based on logged in status - handle in return
*/
  /*NOT LOGGED IN */
  const notInList = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          background: '#FFC529',
          color: 'white',
        }}
      >
        {[
          <Link href="/" passHref>
            Home
          </Link>,
          <Link href="/profile" passHref>
            My profile
          </Link>,
          <Link href="/createrecipe" passHref>
            Create a recipe
          </Link>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <HomeIcon
                    sx={{
                      color: '#FE724C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <AccountCircleIcon
                    sx={{
                      color: '#FE724C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 2 && (
                  <DinnerDiningIcon
                    sx={{
                      color: '#FE724C',
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
          background: 'white',
          color: '#FE724C',
        }}
      >
        {[
          <Link href="/api/auth/login" passHref>
            Login
          </Link>,
          'Usage Policy' /*Needs to be a link*/,
          <Link href="/api/auth/login" passHref>
            Sign Up
          </Link>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <Login
                    sx={{
                      color: '#FE724C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <PolicyIcon
                    sx={{
                      color: '#FE724C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 2 && (
                  <PersonAddIcon
                    sx={{
                      color: '#FE724C',
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
          background: '#FFC529',
          color: 'white',
        }}
      >
        {[
          <Link href="/" passHref>
            Home
          </Link>,
          <Link href="/profile" passHref>
            My profile
          </Link>,
          <Link href="/createrecipe" passHref>
            Create a recipe
          </Link>,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <HomeIcon
                    sx={{
                      color: '#FE724C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <AccountCircleIcon
                    sx={{
                      color: '#FE724C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 2 && (
                  <DinnerDiningIcon
                    sx={{
                      color: '#FE724C',
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
          background: 'white',
          color: '#FE724C',
        }}
      >
        {[
          <Link href="/api/auth/logout" passHref>
            Logout
          </Link>,
          'Usage Policy' /*Needs to be a link*/,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && (
                  <Logout
                    sx={{
                      color: '#FE724C',
                      fontSize: 'xx-large',
                    }}
                  />
                )}
                {index === 1 && (
                  <PolicyIcon
                    sx={{
                      color: '#FE724C',
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
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <HiMenu
                className="burger-menu"
                fontSize="xxx-large"
                color="#FE724C"
              />
            </Button>
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
            <Button onClick={toggleDrawer(anchor, true)}>
              <HiMenu
                className="burger-menu"
                fontSize="xxx-large"
                color="#FE724C"
              />
            </Button>
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
