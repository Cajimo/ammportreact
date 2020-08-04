import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Estilos from './theme/Estilos';

// Creando el theme
/* const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0a809a',
    },
  },
}); */
const theme = Estilos;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
