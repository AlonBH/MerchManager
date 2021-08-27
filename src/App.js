import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple,
} from '@material-ui/core/colors';

import './App.css';

import Navbar from './components/Navbar/Navbar';

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const theme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar themeState={darkState} changeTheme={handleThemeChange}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
