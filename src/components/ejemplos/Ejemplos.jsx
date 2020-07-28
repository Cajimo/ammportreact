import React from 'react';
import EjemploItem from './EjemploItem';
import { Grid } from '@material-ui/core';

const Ejemplos = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <EjemploItem />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <EjemploItem />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <EjemploItem />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <EjemploItem />
      </Grid>
    </Grid>
  );
};

export default Ejemplos;
