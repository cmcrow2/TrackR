import React from 'React';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    color: "white"
  }
});

const UserSearchBar = ({ searchInput, setSearchInput, userSearchSubmit }) => {
  const classes = useStyles();

  return (
    <form
      onSubmit={userSearchSubmit}
      id={searchInput}
    >
      <TextField
        placeholder="Search for Users..."
        onChange={event => setSearchInput(event.target.value)}
        InputProps={{className: classes.input, spellCheck: false}}
      />
    </form>
  );
};

export default UserSearchBar;