import React from 'react';
import EjemploItem from './EjemploItem';
import { Grid } from '@material-ui/core';
import ListaEjemplos from '../../data/ListaEjemplos';

const Ejemplos = () => {
  const getEjemplosCard = (ejemploObj) => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <EjemploItem {...ejemploObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {ListaEjemplos.map((ejemploObj) => getEjemplosCard(ejemploObj))}
    </Grid>
  );
};

export default Ejemplos;
