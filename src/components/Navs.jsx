import React from 'react';
import { AppBar, Toolbar, Switch, Typography, Button } from '@material-ui/core';

const Navs = ({ darkMode, handleThemeChange }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Switch
          checked={darkMode}
          onChange={() => handleThemeChange()}
          color="secondary"
        />
        <Typography variant="h6" style={{flexGrow: 1}}>
          COVID-19 Statistics
        </Typography>
        <Button color="inherit" href="/">HOME</Button>
        <Button color="inherit" href="/aboutus">ABOUT US</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navs;
