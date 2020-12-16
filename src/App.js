import React, { useEffect, useState } from 'react';
import { Container, Grid, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { getData } from './api';
import Global from './components/Global';
import Countries from './components/Countries';
import Clock from './components/Clock';
import Navs from './components/Navs';

import './App.css';

function App() {
  const [globalData, setGlobalData] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setGlobalData(await getData());
    }

    fetchData();
  }, []);

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
