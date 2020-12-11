import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export const ProductCard = ({
  id,
  name,
  // ...rest
}) => {
  const {
    productCard,
  } = useStyles();

  // console.log('id', id);

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
