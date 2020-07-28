import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';

// makeStyles para diseños propios
const useStyles = makeStyles(() => ({
  typoStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typoStyles}>Zona de header</Typography>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
