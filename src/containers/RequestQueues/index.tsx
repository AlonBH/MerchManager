import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import QueuePreview from '../../components/QueuePreview';
import queues from './queues';
import Queue from '../Queue';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const RequestQueues = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Grid container spacing={3} className={classes.root}>
          {queues.map(({ name, img, link }) => (
            <Grid item xs={3}>
              <QueuePreview name={name} imgSrc={img} link={`${url}/${link}`} />
            </Grid>
          ))}
        </Grid>
      </Route>
      <Route path={`${path}/:queueId`}>
        <Queue />
      </Route>
    </Switch>
  );
};

export default RequestQueues;
