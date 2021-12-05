import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import RequestDetails from 'components/RequestDetails';

const Request = () => {
  return (
    <Grid container style={{ height: '100' }}>
      <Grid
        item
        container
        xs={12}
        style={{height: '100px' }}
      >
        <Typography variant='h4'>פרטי בקשה מספר 1008808</Typography>
      </Grid>
      <Grid item container xs={4}>
        <RequestDetails />
      </Grid>
      <Grid item container xs={8}></Grid>
    </Grid>
  );
};

export default Request;
