import {
  responsiveFontSizes,
  createTheme,
  ThemeOptions,
} from '@material-ui/core/styles';

import themes from './themes';

const useTheme = (): ThemeOptions => {
  let theme;
  switch (process.env.NODE_ENV) {
    case 'development':
      theme = createTheme(themes.devTheme as ThemeOptions);
      break;
    case 'production':
      theme = createTheme(themes.prodTheme as ThemeOptions);
      break;
    default:
      theme = createTheme();
      break;
  }

  return responsiveFontSizes(theme);
};

export default useTheme;
