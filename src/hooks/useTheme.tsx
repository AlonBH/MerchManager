import React from 'react';
import createTheme, { ThemeOptions } from '@material-ui/core/styles/createTheme';
import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple,
} from '@material-ui/core/colors';

const useTheme = (): ThemeOptions => {
  switch(process.env.NODE_ENV){
    case 'development':
      return createTheme({
        palette: {
          type: 'dark',
          primary: {
            main: deepOrange[900],
          },
          secondary: {
            main: deepPurple[500],
          },
        },
      });
    case 'production':
      return createTheme({
        palette: {
          type: 'light',
          primary: {
            main: orange[500],
          },
          secondary: {
            main: lightBlue[500],
          },
        },
      });
    default:
      return createTheme();
  }
};

export default useTheme;
