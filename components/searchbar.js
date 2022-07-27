import { Box, IconButton, Paper, Divider, InputBase } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilterCircle } from 'react-icons/bs';

export default function Searchbar() {
  function handleClick(e) {
    e.preventDefault();
    console.log('leon');
  }

  return (
    <Box
      mt="50px"
      ml="5px"
      sx={{
        border: 'solid',
        borderWidth: '1.5px',
        borderRadius: 3,
        width: '97%',
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '4px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          borderRadius: 3,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Recipe"
          inputProps={{ 'aria-label': 'Search Recipes' }}
        />

        <IconButton
          onClick={handleClick}
          type="submit"
          sx={{ p: '15px' }}
          aria-label="search"
        >
          <AiOutlineSearch />
        </IconButton>
        <Divider
          sx={{ height: 28, m: 1, color: 'black' }}
          orientation="vertical"
        />
        <IconButton sx={{ p: '10px', color: 'black' }} aria-label="directions">
          <BsFilterCircle />
        </IconButton>
      </Paper>
    </Box>
  );
}



// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// export default function BasicMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }