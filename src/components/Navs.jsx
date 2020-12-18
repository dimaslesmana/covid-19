import React from 'react';
import { AppBar, Toolbar, Switch, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
        <Link style={{ textDecoration: 'none' }}  to="/"><Button style={{color: 'white'}}>HOME</Button></Link>
        <Link style={{ textDecoration: 'none' }}  to="/aboutus"><Button style={{color: 'white'}} >ABOUT US</Button></Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navs;
