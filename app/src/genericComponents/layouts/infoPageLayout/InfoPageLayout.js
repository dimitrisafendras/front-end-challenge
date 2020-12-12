import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './styles';

export const InfoPageLayout = ({ styles, children }) => {
  const {
    infoPageLayout,
  } = useStyles();

  return (
    <div style={styles} className={infoPageLayout}>
      {children}
    </div>
  );
};

InfoPageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  styles: PropTypes.object,
};

InfoPageLayout.defaultProps = {
  styles: {},
};
