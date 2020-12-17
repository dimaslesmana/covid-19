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
        <Typography variant="h6" style={{textAlign: "center", flexGrow: 1, marginLeft: 24}}>
          COVID-19 Statistics
        </Typography>
        <Button color="inherit" href="#">About Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navs;
