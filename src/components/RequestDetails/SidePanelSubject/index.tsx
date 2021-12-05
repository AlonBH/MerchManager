import React from 'react';
import { Typography, Divider } from '@material-ui/core';

import Row from './Row';

import useStyles from './styles';

interface Props {
  title?: string;
  rows: Array<{ title: string; value: string }>;
}

const SidePanelSubject = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      {props.title && 
        <div className={classes.title}>
          <Typography variant="h5">{props.title}</Typography>
        </div>}
      {props.rows.map((x, index) => (
        <div>
          <Row key={index} title={x.title} value={x.value} />
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default SidePanelSubject;
