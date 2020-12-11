import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const ProductCard = ({
  id,
  name,
}) => {
  const {
    productCard,
  } = useStyles();

  return (
    <div className={productCard}>
      {name}
      <Link to={`/app/${id}`}>
        View
      </Link>
    </div>
  );
};

ProductCard.propTypes = { name: PropTypes.string, id: PropTypes.string };

ProductCard.defaultProps = { name: '', id: '' };
