import { Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';

import QueuePreview from '../QueuePreview';
import queues from './queues';

const RequestQueueList = () => {
  let { url } = useRouteMatch();

  return (
    <Grid container spacing={3}>
      {queues.map(({ name, img, link }) => (
        <Grid item xs={3}>
          <QueuePreview name={name} imgSrc={img} link={`${url}/${link}`} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RequestQueueList;
