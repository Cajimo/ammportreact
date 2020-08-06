import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#C1DBD7',
      main: '#0A809A',
      dark: '#075161',
    },
    secondary: {
      light: '#FAF9F9',
      main: '#999999',
      dark: '#333333',
    },
  },

  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: 2.5,
    h2: 2,
    h3: 1.5,
    h4: 1,
  },
});
export default theme;
