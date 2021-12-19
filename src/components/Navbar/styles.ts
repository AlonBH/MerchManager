import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: '64px',
    fontSize: '24px',
  },
  bar: {
    display: 'flex',
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
  greeting: {
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
    padding:'0 10px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  doubleSpacing: {
    flexGrow: 2,
  },
  spacing: {
    flexGrow: 1,
  }
}));

export default useStyles;
