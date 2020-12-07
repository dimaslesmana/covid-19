import React, { useEffect, useState } from 'react';
import { Container, Grid, AppBar, Toolbar, Switch, CssBaseline, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { getData } from './api';
import Global from './components/Global';
import Countries from './components/Countries';

import './App.css';

function App() {
  const [globalData, setGlobalData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setGlobalData(await getData());
    }

    fetchData();
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
      palette: {
          type: darkMode ? 'dark' : 'light'
      }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="Title">
            Covid-19 Statistics
          </Typography>
          <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          color="secondary"
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Global data={globalData}/>
          </Grid>
          <Grid item>
            <Countries />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
