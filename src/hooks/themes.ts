import {
  orange,
  lightBlue,
  deepOrange,
  deepPurple,
} from '@material-ui/core/colors';

const themes = {
  prodTheme: {
    palette: {
      background: {
        default: "red"
      },
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
      background: {
        default: "#EEEEEE"
      },
    },
  },
};

export default themes;