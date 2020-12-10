import React from 'react';
import { useStyles } from './styles';

export const Footer = () => {
  const {
    footer,
  } = useStyles();

  return (
    <div className={footer} />
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};
