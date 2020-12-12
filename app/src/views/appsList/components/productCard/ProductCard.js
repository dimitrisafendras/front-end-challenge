import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const ProductCard = ({
  id,
  name,
  platforms,
  price_overview,
  header_image,
}) => {
  const {
    productCard,
  } = useStyles();

  console.log('rest', platforms, header_image, price_overview);

  return (
    <Link to={`/app/${id}`} className={productCard}>
      {name}
    </Link>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  platforms: PropTypes.object,
  price_overview: PropTypes.object,
  header_image: PropTypes.string,
};

ProductCard.defaultProps = {
  name: '',
  id: '',
  platforms: {},
  price_overview: {},
  header_image: '',
};
