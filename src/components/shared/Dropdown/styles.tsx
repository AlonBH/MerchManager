import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  menu: {
    zIndex: 1,
  },
}));

export default useStyles;
