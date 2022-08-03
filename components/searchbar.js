import {
  Box,
  IconButton,
  Paper,
  Divider,
  InputBase,
  MenuItem,
  Select,
  FormControl,
} from '@mui/material';
import { useState } from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilterCircle } from 'react-icons/bs';
import FilterListIcon from '@mui/icons-material/FilterList';

export async function getServerSideProps() {
  try {
    const response = await fetch(`http://craveaway.herokuapp.com/recipes`);
    const data = await response.json();
    const { payload } = data;
    return { props: { payload } };
  } catch (error) {
    console.log(error.message);
  }
}

export default function Searchbar({ payload }) {
  const [searchInput, setSearchInput] = useState('');
  function handleClick(e) {
    e.preventDefault();
    setSearchInput('');
    console.log({ payload });
  }
  function handleChange(e) {
    setSearchInput(e.target.value);
    console.log(searchInput);
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
        ml="6px"
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
            onChange={handleChange}
            value={searchInput}
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
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Select
              id="basic-menu"
              anchorel={anchorEl}
              // open={open}
              onClick={handleDDClick}
              // onClose={handleDDClose}
              // MenuListProps={{
              //   'aria-labelledby': 'basic-button',
              // }}
              IconComponent={FilterListIcon}
            >
              <MenuItem onClick={handleDDClose}>Profile</MenuItem>
              <MenuItem onClick={handleDDClose}>My account</MenuItem>
              <MenuItem onClick={handleDDClose}>Logout</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Box>
    </>
  );
}
