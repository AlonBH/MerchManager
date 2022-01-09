import React from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';

import useStyles from './styles';

interface Props {
  id: string,
  palestinianId: string,
  createdAt: string,
  scheduleNumber: number,
  merchandiseAmount: number
}

const RequestPreview = (props: Props) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.requestProps}>
        <div>
          <Typography variant="subtitle1">{props.id}</Typography>
          <Typography variant="subtitle2">מספר בקשה</Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <Typography variant="subtitle1">{props.palestinianId}</Typography>
          <Typography variant="subtitle2">מספר פלסטיני</Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <Typography variant="subtitle1">{props.createdAt}</Typography>
          <Typography variant="subtitle2">תאריך יצירה</Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <Typography variant="subtitle1">{props.scheduleNumber}</Typography>
          <Typography variant="subtitle2">מספר תיאום</Typography>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
          <Typography variant="subtitle1">{props.merchandiseAmount}</Typography>
          <Typography variant="subtitle2">כמות סחורות</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default RequestPreview;
