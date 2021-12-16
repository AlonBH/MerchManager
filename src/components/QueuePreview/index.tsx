import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

type Props = {
  name: string;
  imgSrc: string;
  link: string;
};

const QueuePreview = (props: Props) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to={props.link}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            image={props.imgSrc}
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default QueuePreview;
