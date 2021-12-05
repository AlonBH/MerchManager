import React from 'react';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

interface Props {
    title: string,
    value: string
}

const Row = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>{props.title}</Typography>
      <Typography>{props.value}</Typography>
    </div>
  );
};

export default Row;
