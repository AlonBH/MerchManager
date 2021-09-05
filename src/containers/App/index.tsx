import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Navbar from '../../components/Navbar';
import useTheme from '../../hooks/useTheme';

import './App.css';

const App = () => (
  <ThemeProvider theme={useTheme()}>
    <div className="App">
      <Navbar />
    </div>
  </ThemeProvider>
);

export default App;
