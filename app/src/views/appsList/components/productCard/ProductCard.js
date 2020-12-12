import { Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { appleLogo, linuxLogo, windowsLogo } from '../../../../static';
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
    img,
    info,
    price,
    logo,
    name: nameClass,
    platforms: platformsClass,
  } = useStyles();

  console.log('rest', platforms);

  return (
    <Link to={`/app/${id}`}>
      <div className={productCard}>
        {/* <Typography variant="body2">{name}</Typography> */}
        <img src={header_image} alt="" className={img} />
        <div className={info}>
          <div className={nameClass}>
            {name}
          </div>
          <div className={platformsClass}>
            <img src={windowsLogo} alt="" className={logo} />
            <img src={appleLogo} alt="" className={logo} />
            <img src={linuxLogo} alt="" className={logo} />
          </div>
        </div>
        <div className={price} />
      </div>
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
