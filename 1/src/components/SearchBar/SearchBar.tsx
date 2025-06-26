import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import type { JSX } from '@emotion/react/jsx-runtime';
import type { FC } from 'react';
import type { SearchProps } from '../../types/type';

const SearchBar:FC<SearchProps> = ({ searchTerm, onSearch }):JSX.Element => {
  return (
    <TextField
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      InputProps={{
        endAdornment: <SearchIcon htmlColor='#432EAB'/>,
      }}
      fullWidth
      sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: 50,
    },
  }}
    />
  );
};

export default SearchBar;