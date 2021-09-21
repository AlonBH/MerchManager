import createTheme, { ThemeOptions } from '@material-ui/core/styles/createTheme';

import themes from './themes';

const useTheme = (): ThemeOptions => {
  switch(process.env.NODE_ENV){
    case 'development':
      return createTheme(themes.devTheme as ThemeOptions);
    case 'production':
      return createTheme(themes.prodTheme as ThemeOptions);
    default:
      return createTheme();
  }
};

export default useTheme;
