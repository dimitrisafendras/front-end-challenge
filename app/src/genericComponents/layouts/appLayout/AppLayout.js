import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './styles';

export const AppLayout = ({ children }) => {
  const {
    appLayout,
  } = useStyles();

  return (
    <div className={appLayout}>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

AppLayout.defaultProps = {};
