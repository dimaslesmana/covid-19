import React, { useState } from 'react';
import { Container, Box, Divider, CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router,  Route} from 'react-router-dom';

import Global from './components/Global';
import Countries from './components/Countries';
import { Indonesia, Provinsi, DailyData } from './components/indonesiaSection';
import Clock from './components/Clock';
import Navs from './components/Navs';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from "./components/Footer";

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
          <Box textAlign="center">
            <Router>
              <Route path="/" exact render={ () => {
                return (
                  <>
                    <Clock />
                    <Divider />
                    <Global />
                    <Divider />
                    <Countries />
                    <Divider />
                    <Indonesia />
                    <Divider />
                    <Provinsi />
                    <Divider />
                    <DailyData />
                  </>
                )
              }}/>
              <Route path="/aboutus" exact render={ () => {
                  return(<AboutUs />)
              }}/>
            </Router>
          </Box>
        </Container>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
