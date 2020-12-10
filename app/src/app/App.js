import React from 'react';
import { AppsList } from '../views';
import { useStyles } from './styles';

export const App = () => {
  const {
    app,
  } = useStyles();

  return (
    <div className={app}>
      <AppsList />
    </div>
  );
};
