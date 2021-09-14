import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple,
} from '@material-ui/core/colors';

export default {
  prodTheme: {
    palette: {
      type: 'dark',
      primary: {
        main: deepOrange[900],
      },
      secondary: {
        main: deepPurple[500],
      },
    },
  },
  devTheme: {
    palette: {
      type: 'light',
      primary: {
        main: orange[500],
      },
      secondary: {
        main: lightBlue[500],
      },
    },
  },
};
