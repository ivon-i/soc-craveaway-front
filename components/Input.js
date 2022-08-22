
import React from 'react';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Input({ searchInput, setSearchInput, trigger, sx }) {

  // This function allows the user to look for the searched results by clicking on the searchIcon. It also clear the data once the results are shown.
  function handleClick(e) {
    e.preventDefault();
    setSearchInput('');
    trigger();
  }
  
  function handleChange(e) {
    setSearchInput(e.target.value);
  }
  return (
    <>
      <Box
        sx={{
          ...sx,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: ' ',
          border: '  0.75px solid rgba(114, 117, 118, 1)',
          borderRadius: '100px',
          py: 0.5,
          px: 1,
          width: {
            sm: '100%',
            md: '420px',
          },
          height: '40px',
          '& input': {
            border: 'none',
            outline: 'none',
            borderRadius: '40px',
            fontSize: '1.2rem',
            width: {
              sm: '100%',
              md: '420px',
            },
          },
        }}
      >
        <IconButton
          onClick={handleClick}
          type="submit"
          sx={{ p: '8px' }}
          aria-label="search"
        >
          <SearchIcon sx={{ color: 'black', opacity: '70%' }} />
        </IconButton>
        <input
          onChange={handleChange}
          value={searchInput}
          placeholder="Search Recipe"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleClick(e);
            }
          }}
        />
      </Box>
    </>
  );
}
export default Input;
