import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import MoreVert from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Switch } from '@material-ui/core';

import Dropdown from '../shared/Dropdown/Dropdown';
import Logo from '../shared/Logo/Logo';

import truckLogo from '../../assets/images/truck.png';
import sunLogo from '../../assets/images/sun.png';

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
    color: 'inherit',
  },
  logoSection: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    filter: 'grayscale(1) invert(1)',
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
    color: 'inherit',
  },
  toolbarGrid: {
    height: '100%',
  },
  navbutton: {
    fontSize: 'inherit',
    color: 'inherit',
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

const Navbar = (props) => {
  const classes = useStyles();

  const exportMenu = [{ name: 'בקשות' }, { name: 'משלוחים' }];
  const moreOptionsMenu = [
    { name: 'יצירת בקשה חדשה' },
    { name: 'ניהול ישויות' },
    { name: 'ישויות בתחקור' },
    { name: 'ניהול הרשאות' },
    { name: 'יצירת תיאום' },
    { name: 'דוחות' },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
          <Grid className={classes.toolbarGrid} container>
            <Grid item xs={7} className={classes.logoContainer}>
              <div className={classes.logoSection}>
                <Logo src={truckLogo} />
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
              <span>צהריים טובים אלון!</span>
              <div className={classes.sunLogo}>
                <Logo src={sunLogo} />
              </div>
              <TextField
                id="outlined-basic"
                label="לפי מה לחפש?"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={1} className={classes.actions}>
              <Switch checked={props.darkState} onChange={props.changeTheme} />
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
