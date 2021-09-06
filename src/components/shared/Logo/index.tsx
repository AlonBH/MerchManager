import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  src: typeof import("*.png") | typeof import("*.jpeg") | typeof import("*.jpg")
}

const useStyles = makeStyles(_ => ({
  root: {
    height: '100%',
    '& img': {
      height: '100%'
    }
  },
}));

const Logo = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={props.src.default} />
    </div>
  );
};

export default Logo;