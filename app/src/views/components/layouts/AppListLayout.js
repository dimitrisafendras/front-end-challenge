import React from 'react';
import PropTypes from 'prop-types';

export const AppListLayout = ({ children }) => (
  <div className="AppListLayout.scss">
    {children}
  </div>
);

AppListLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
