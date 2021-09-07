import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';

import Navbar from '../../components/Navbar';
import useTheme from '../../hooks/useTheme';

import './App.css';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={useTheme()}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            Giff
          </Route>
          <Route path="/gazaExportRequests">
            Requests
          </Route>
          <Route path="/gazaExportSchedules">
            Schedules
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
