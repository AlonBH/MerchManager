import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from 'components/Navbar';
import Queue from 'containers/Queue';
import RequestQueueList from 'components/RequestQueueList';
import Request from 'containers/Request';
import './App.css';

import useTheme from 'hooks/useTheme';

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
        <CssBaseline />
        <div className="App">
          <Navbar />
          <div className={classes.root}>
            <Switch>
              <Route exact path="/">
                Giff
              </Route>
              <Route exact path="/gazaExportRequests">
                <RequestQueueList />
              </Route>
              <Route exact path={'/gazaExportRequests/:queueId'}>
                <Queue />
              </Route>
              <Route path={'/gazaExportRequests/:queueId/:requestId'}>
                <Request />
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
