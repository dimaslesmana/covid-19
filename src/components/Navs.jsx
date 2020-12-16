import React from 'react';
import { AppBar, Toolbar, Switch, Typography, Button } from '@material-ui/core';

const Navs = ({ darkMode, handleThemeChange }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" className="Title">
          COVID-19 Statistics
        </Typography>
        <Button color="inherit" href="#">About Us</Button>
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
