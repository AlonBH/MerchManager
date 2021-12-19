import React from 'react';
import {
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core';
import SidePanelSubject from './SidePanelSubject';

import useStyles from './styles';

const data = [
  {
    rows: [
      {
        title: 'זמן פתיחת הבקשה',
        value: '29/06/21 15:00',
      },
      {
        title: 'מספר בקשה פלסטיני',
        value: '1/362',
      },
    ],
  },
  {
    title: 'פרטי החברה המקבלת',
    rows: [
      {
        title: 'ח״פ',
        value: '209042340',
      },
      {
        title: 'שם',
        value: 'אלון בן חיים',
      },
    ],
  },
];

const RequestDetails = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="מגזר פרטי"
        subheader="ערעור"
        className={classes.detailsHeader}
      />
      <CardContent>
        {data.map((x, index) => (
            <SidePanelSubject key={index} title={x.title} rows={x.rows}/>
        ))}
      </CardContent>
    </Card>
  );
};

export default RequestDetails;
