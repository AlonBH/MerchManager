import React from 'react';
import {
  Card,
  CardContent,
  CardHeader
} from '@material-ui/core';
import SidePanelSubject from './SidePanelSubject';

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
  return (
    <Card style={{ width: '100%' }}>
      <CardHeader
        title="מגזר פרטי"
        subheader="ערעור"
        style={{ height: '100px' }}
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
