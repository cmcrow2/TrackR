import React from 'React';
import { TextField } from '@material-ui/core';

const UserSearchBar = ({ searchInput, setSearchInput, userSearchSubmit }) => {

  return (
    <form
      onSubmit={userSearchSubmit}
      id={searchInput}
    >
      <TextField
        placeholder="Search for Users..."
        onChange={e => setSearchInput(e.target.value)}
      />
    </form>
  );
};

export default UserSearchBar;