import React from 'react';
import { AppBar, Toolbar, Switch, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navs = ({ darkMode, handleThemeChange }) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
          <Link style={{ textDecoration: 'none' }}  to="/"><Button style={{color: 'white'}}>HOME</Button></Link>
          <Link style={{ textDecoration: 'none' }}  to="/aboutus"><Button style={{color: 'white'}} >ABOUT US</Button></Link>
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
