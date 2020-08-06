import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/layout/Header';
import Ejemplos from './components/ejemplos/Ejemplos';
//import Home from './components/pages/Home';

import theme from './theme/ThemeBase';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Ejemplos />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
