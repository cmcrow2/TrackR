import React from 'react';
import { Typography, AppBar, Toolbar, Box } from '@material-ui/core';

import UserSearchBar from './UserSearchBar.js';

const Header = ({ searchInput, setSearchInput, userSearchSubmit }) => {

  return (
    <AppBar position="fixed">
      <Box pt={2} pb={2}>
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
      </Box>
    </AppBar>
  );
};

export default Header;