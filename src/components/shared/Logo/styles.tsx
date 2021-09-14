import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(_ => ({
    root: {
      height: '100%',
      '& img': {
        height: '100%'
      }
    },
  }));

export default useStyles;