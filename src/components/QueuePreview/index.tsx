import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  imgSrc: string;
  link: string;
};

const useStyles = makeStyles({
  root: {
    
  },
  media: {
    height: 140,
  },
});

const QueuePreview = (props: Props) => {
  const classes = useStyles();

  return (
    <Link to={props.link}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.imgSrc} title={props.name} />
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
