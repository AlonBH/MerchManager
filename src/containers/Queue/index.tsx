import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useRouteMatch, useParams } from 'react-router-dom';

import RequestPreview from '../../components/RequestPreview';

const useStyles = makeStyles((theme) => ({
  root: {},
  preview: {
    marginTop: 10,
  },
}));

const data = [
  {
    id: '209042340',
    palestinianId: 'T21/8745',
    createdAt: '21/01/1997',
    scheduleNumber: 487264958,
    merchandiseAmount: 16
  },
  {
    id: '209042340',
    palestinianId: 'T21/8745',
    createdAt: '21/01/1997',
    scheduleNumber: 487264958,
    merchandiseAmount: 16
  },
  {
    id: '209042340',
    palestinianId: 'T21/8745',
    createdAt: '21/01/1997',
    scheduleNumber: 487264958,
    merchandiseAmount: 16
  },
  {
    id: '209042340',
    palestinianId: 'T21/8745',
    createdAt: '21/01/1997',
    scheduleNumber: 487264958,
    merchandiseAmount: 15
  }
]

const Queue = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  let params: { queueId: string } = useParams();

  return (
    <>
      <h1>{params.queueId}</h1>
      {data.map(request => (
        <div className={classes.preview}>
          <RequestPreview {...request}/>
        </div>
      ))}
    </>
  );
};

export default Queue;
