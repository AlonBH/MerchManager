import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useRouteMatch, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Queue = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  let params: {queueId: string} = useParams();

  return (
      <h1>{params.queueId}</h1>
  );
};

export default Queue;
