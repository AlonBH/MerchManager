import React from 'react';

import useStyles from './styles';

type Props = {
  src: typeof import("*.png") | typeof import("*.jpeg") | typeof import("*.jpg")
}

const Logo = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={props.src.default} alt="logo"/>
    </div>
  );
};

export default Logo;