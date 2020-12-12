import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './styles';

export const InfoPrice = ({
  className,
  discount,
  initialPrice,
  finalPrice,
  platforms,
}) => {
  const {
    infoPrice,
  } = useStyles();

  return (
    <div className={`${className} ${infoPrice}`} />
  );
};

InfoPrice.propTypes = {
  className: PropTypes.string,
  initialPrice: PropTypes.string,
  finalPrice: PropTypes.string,
  discount: PropTypes.number,
  platforms: PropTypes.object,

};

InfoPrice.defaultProps = {
  className: '',
  initialPrice: '',
  finalPrice: '',
  platforms: {},
  discount: null,
};
