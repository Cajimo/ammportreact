import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/layout/Header';
import Ejemplos from './components/ejemplos/Ejemplos';
//import Home from './components/pages/Home';

/* import '../src/sass/main.scss'; */

const App = () => {
  return (
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
  );
};

export default App;
