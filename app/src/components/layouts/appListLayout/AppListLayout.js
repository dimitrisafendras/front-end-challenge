import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const AppListLayout = ({ children }) => {
  const {
    appListLayout,
  } = useStyles();

  return (
    <div className={appListLayout}>
      {children}
    </div>
  );
};

AppListLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
