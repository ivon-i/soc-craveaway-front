import { Box, IconButton, Paper, Divider, InputBase, MenuItem, Select } from '@mui/material';
import { useState } from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilterCircle } from 'react-icons/bs';

export default function Searchbar() {
  function handleClick(e) {
    e.preventDefault();
    console.log('leon');
  }

  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleDDClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleDDClose = () => {
      setAnchorEl(null);
    };

  return (
    <>
      <Box
        mt="50px"
        // ml="5px"
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
          <Select
            id="basic-menu"
            anchorEl={anchorEl}
            // open={open}
            onClick={handleDDClick}
            // onClose={handleDDClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            IconComponent={BsFilterCircle}
            sx={{borderStyle: 'hidden'}}
          >
            <MenuItem onClick={handleDDClose}>Profile</MenuItem>
            <MenuItem onClick={handleDDClose}>My account</MenuItem>
            <MenuItem onClick={handleDDClose}>Logout</MenuItem>
          </Select>
        </Paper>
      </Box>
    </>
  );
}