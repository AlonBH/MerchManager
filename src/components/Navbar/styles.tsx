import React from 'react';
import {makeStyles, ThemeOptions } from '@material-ui/core';

export const useStyles = makeStyles((theme: ThemeOptions) => ({
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
      // marginRight: theme.spacing(2),
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