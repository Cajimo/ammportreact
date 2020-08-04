import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import Estilos from './theme/Estilos';

// Creando el theme
/* const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0a809a',
    },
  },
}); */
const Theme = Estilos;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
