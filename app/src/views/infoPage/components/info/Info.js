import React from 'react';
import { useStyles } from './styles';

export const Info = ({ className }) => {
  const {
    info,
  } = useStyles();

  return (
    <div className={`${className} ${info}`} />
  );
};

Info.propTypes = {};

Info.defaultProps = {};
