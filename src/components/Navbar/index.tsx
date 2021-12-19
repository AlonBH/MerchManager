import React from 'react';
import { Typography, Button, Toolbar, AppBar, Grid } from '@material-ui/core';

import { Logo, Dropdown } from '../shared/index';

import { truckImg, sunImg } from '../../assets/images';

import RequestSearch from './RequestSearch';
import MoreOptionsMenu from './RequestSearch/MoreOptionsMenu';
import * as paths from '../../consts/paths';

import useStyles from './styles';

const exportMenu = [
  { name: 'בקשות', link: paths.EXPORT_REQUESTS },
  { name: 'תיאומים', link: paths.EXPORT_SCHEDULES },
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <div className={classes.logoSection}>
            <Logo src={truckImg} />
            <span className={classes.title}>יובל</span>
          </div>
          <Dropdown items={exportMenu}>
            <Button className={classes.navbutton}>ייצוא לרצועת עזה</Button>
          </Dropdown>
          <div className={classes.doubleSpacing} />
          <Typography variant="h5" gutterBottom>
            צהריים טובים אלון!
          </Typography>
          <div className={classes.sunLogo}>
            <Logo src={sunImg} />
          </div>
          <RequestSearch />
          <div className={classes.spacing} />
          <MoreOptionsMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
