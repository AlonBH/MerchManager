import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Queue from '../../components/Queue';

import queues from './queues';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));

const RequestQueues = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      {queues.map((queue) => (
        <Grid item xs={3}>
          <Queue name={queue.name} imgSrc={queue.img} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RequestQueues;
