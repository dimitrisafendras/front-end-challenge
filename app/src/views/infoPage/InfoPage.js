import React from 'react';
import { useStyles } from './styles';

export const InfoPage = (props) => {
  const {
    infoPage,
  } = useStyles();

  console.log('props', props);

  return (
    <div className={infoPage} />
  );
};

InfoPage.propTypes = {};

InfoPage.defaultProps = {};
