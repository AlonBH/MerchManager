import React from 'react';
import { Typography, Button, Toolbar, AppBar, Grid } from '@material-ui/core';

import { Logo, Dropdown } from '../shared/index';

import { truckImg, sunImg } from '../../assets/images';

import RequestSearch from './RequestSearch';
import MoreOptionsMenu from './RequestSearch/MoreOptionsMenu';
import * as paths from '../../consts/paths';

import useStyles from './styles';

const exportMenu = [
  { name: 'בקשות', link: paths.NEW_REQUEST },
  { name: 'תיאומים', link: paths.MANAGE_ENTITIES },
];

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Grid className={classes.toolbarGrid} container>
            <Grid item xs={6} className={classes.logoContainer}>
              <div className={classes.logoSection}>
                <Logo src={truckImg} />
                <span className={classes.title}>יובל</span>
              </div>
              <Dropdown items={exportMenu}>
                <Button className={classes.navbutton}>ייצוא לרצועת עזה</Button>
              </Dropdown>
            </Grid>
            <Grid item xs={2} className={classes.greeting}>
              <Typography variant="h5" gutterBottom>
                צהריים טובים אלון!
              </Typography>
              <div className={classes.sunLogo}>
                <Logo src={sunImg} />
              </div>
            </Grid>
            <Grid item xs={3} className={classes.search}>
              <RequestSearch />
            </Grid>
            <Grid item xs={1} className={classes.actions}>
              <MoreOptionsMenu />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
