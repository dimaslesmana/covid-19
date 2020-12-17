import React from 'react';
import { AppBar, Toolbar, Switch, Typography, Button } from '@material-ui/core';

const Navs = ({ darkMode, handleThemeChange }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
      <Button color="inherit" href="/">HOME</Button>
        <Button color="inherit" href="/aboutus">ABOUT US</Button>
        <Typography variant="h6" style={{textAlign: "center", flexGrow: 1, marginLeft: 24}}>
          COVID-19 Statistics
        </Typography>
        <Switch
          checked={darkMode}
          onChange={() => handleThemeChange()}
          color="secondary"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navs;
