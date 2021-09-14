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

import useStyles from './styles';

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