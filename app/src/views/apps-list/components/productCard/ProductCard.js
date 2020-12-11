import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const ProductCard = ({ name }) => {
  const {
    productCard,
  } = useStyles();

  // console.log('props', props);

  return (
    <div className={productCard}>
      {name}
    </div>
  );
};

ProductCard.propTypes = { name: PropTypes.string };

ProductCard.defaultProps = { name: '' };
