import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';

import Navbar from '../../components/Navbar';
import useTheme from '../../hooks/useTheme';

import './App.css';
import RequestQueues from '../RequestQueues';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    padding: '20px',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={useTheme()}>
        <div className="App">
          <Navbar />
          <div className={classes.root}>
            <Switch>
              <Route exact path="/">
                Giff
              </Route>
              <Route path="/gazaExportRequests">
                <RequestQueues />
              </Route>
              <Route path="/gazaExportSchedules">Schedules</Route>
            </Switch>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
