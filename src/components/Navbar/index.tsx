import React from 'react';

import MoreVert from '@material-ui/icons/MoreVert';
import {
  makeStyles,
  IconButton,
  TextField,
  Typography,
  Button,
  Toolbar,
  AppBar,
  Grid,
} from '@material-ui/core';

import { Logo, Dropdown } from '../shared/index';

import { truckImg, sunImg } from '../../assets/images';

import { exportMenu, moreOptionsMenu } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '64px',
    fontSize: '24px',
  },
  bar: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '64px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: '48px',
  },
  logoSection: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    // filter: 'grayscale(1) invert(1)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  toolbarGrid: {
    height: '100%',
  },
  navbutton: {
    fontSize: 'inherit',
  },
  sunLogo: {
    height: '80%',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Grid className={classes.toolbarGrid} container>
            <Grid item xs={7} className={classes.logoContainer}>
              <div className={classes.logoSection}>
                <Logo src={truckImg} />
                <span className={classes.title}>יובל</span>
              </div>
              <Dropdown items={exportMenu}>
                <Button className={classes.navbutton}>ייצוא לרצועת עזה</Button>
              </Dropdown>
              <Dropdown items={exportMenu}>
                <Button className={classes.navbutton}>ייבוא לרצועת עזה</Button>
              </Dropdown>
            </Grid>
            <Grid item xs={4} className={classes.search}>
              <Typography variant="h5" gutterBottom>
                צהריים טובים אלון!
              </Typography>
              <div className={classes.sunLogo}>
                <Logo src={sunImg} />
              </div>
              <TextField
                id="outlined-basic"
                label="לפי מה לחפש?"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={1} className={classes.actions}>
              <Dropdown items={moreOptionsMenu}>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Dropdown>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
