import React, { useState } from 'react';
import { Container, Grid, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Global from './components/Global';
import Countries from './components/Countries';
import { Indonesia, Provinsi, DailyData } from './components/indonesiaSection';
import Clock from './components/Clock';
import Navs from './components/Navs';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navs darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container maxWidth="lg">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Clock />
          </Grid>
          <Grid item>
            <Global />
          </Grid>
          <Grid item>
            <Countries />
          </Grid>
          <Grid item>
            <Indonesia />
            <Provinsi />
          </Grid>
          <DailyData />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
