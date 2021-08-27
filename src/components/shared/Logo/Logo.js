import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    '& img': {
      height: '100%'
    }
  },
}));

const Logo = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={props.src} />
    </div>
  );
};

export default Logo;