import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './styles';

export const InfoPageLayout = ({ children }) => {
  const {
    infoPageLayout,
  } = useStyles();

  return (
    <div className={infoPageLayout}>
      {children}
    </div>
  );
};

InfoPageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
