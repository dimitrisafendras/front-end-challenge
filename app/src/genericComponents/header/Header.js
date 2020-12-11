import React from 'react';
import { useStyles } from './styles';

export const Header = () => {
  const {
    header,
  } = useStyles();

  return (
    <div className={header} />
  );
};

Header.propTypes = {};

Header.defaultProps = {};
