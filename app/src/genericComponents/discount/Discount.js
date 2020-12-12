import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export const Discount = ({ discount_percent }) => {
  const {
    discount,
  } = useStyles();

  return (
    <div className={discount}>{`-${discount_percent}%`}</div>);
};

Discount.propTypes = { discount_percent: PropTypes.number };

Discount.defaultProps = { discount_percent: 0 };
