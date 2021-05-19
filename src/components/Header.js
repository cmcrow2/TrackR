import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';

import UserSearchBar from './UserSearchBar.js';

const Header = ({ searchInput, setSearchInput, userSearchSubmit }) => {

  return (
    <AppBar position="fixed" zIndex={100}>
      <Toolbar>
        <Typography style={{fontSize: 36, flex: 1}}>
          TrackR
        </Typography>
        <UserSearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          userSearchSubmit={userSearchSubmit}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;