// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// function Input({ searchInput, setSearchInput, trigger }) {
//   // console.log('onChange', onChange);
//   function handleClick(e) {
//     e.preventDefault();
//     setSearchInput('');
//     trigger();
//   }
//   function handleChange(e) {
//     setSearchInput(e.target.value);
//     console.log(searchInput);
//   }
//   return (
//     <>
//       <Box
//         sx={{
//           // ...sx,
//           display: 'flex',
//           alignItems: 'center',
//           backgroundColor: '#F7F7F7 ',
//           borderRadius: '100px',
//           py: 1,
//           px: 2,
//           '& input': {
//             border: 'none',
//             outline: 'none',
//             borderRadius: '40px',
//             fontSize: '1.2rem',
//           },
//         }}
//       >
//         <IconButton
//           onClick={handleClick}
//           type="submit"
//           sx={{ p: '15px' }}
//           aria-label="search"
//         >
//           <SearchIcon sx={{ color: 'black' }} />
//         </IconButton>
//         <input
//           onChange={handleChange}
//           value={searchInput}
//           placeholder="Search Recipe"
//           style={{ backgroundColor: 'transparent' }}
//         />
//       </Box>
//     </>
//   );
// }
// export default Input;

import React from 'react';
import { Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Input({ searchInput, setSearchInput, trigger, sx }) {
  // console.log('onChange', onChange);
  function handleClick(e) {
    e.preventDefault();
    setSearchInput('');
    trigger();
  }
  function handleChange(e) {
    setSearchInput(e.target.value);
    console.log(searchInput);
  }
  return (
    <>
      <Box
        sx={{
          ...sx,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: ' ',
          border: ' 0.5px solid rgba(52, 58, 64, 0.8)',
          borderRadius: '100px',
          py: 0.5,
          px: 2,
          width: {
            sm: '100%',
            md: '420px',
          },
          height: '48px',
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
          sx={{ p: '15px' }}
          aria-label="search"
        >
          <SearchIcon sx={{ color: 'black' }} />
        </IconButton>
        <input
          onChange={handleChange}
          value={searchInput}
          placeholder="Search Recipe"
        />
      </Box>
    </>
  );
}
export default Input;