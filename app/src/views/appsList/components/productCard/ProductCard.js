import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Discount, Prices } from '../../../../genericComponents';
import { appleLogo, linuxLogo, windowsLogo } from '../../../../static';
import { useStyles } from './styles';

export const ProductCard = ({
  id,
  name,
  platforms: {
    windows,
    mac,
    linux,
  },
  price_overview: {
    final_formatted,
    initial_formatted,
    discount_percent,
  },
  header_image,
  categories,
}) => {
  const {
    productCard,
    img,
    info,
    price,
    noDiscountPrice,
    logo,
    name: nameClass,
    platforms: platformsClass,
    link,
    categoriesContainer,
    category,
  } = useStyles();

  const hasDiscount = discount_percent > 0;

  return (
    <Link to={`/app/${id}`} className={link}>
      <div className={productCard}>
        <img src={header_image} alt="" className={img} />
        <div className={info}>
          <div className={nameClass}>
            {name}
          </div>
          <div className={platformsClass}>
            {windows && <img src={windowsLogo} alt="" className={logo} />}
            {mac && <img src={appleLogo} alt="" className={logo} />}
            {linux && <img src={linuxLogo} alt="" className={logo} />}
          </div>
          <div className={categoriesContainer}>
            {categories.slice(0, 3).map(({ cId, description }) => (
              <div key={cId} className={category}>
                {`${description},`}
                &nbsp;
              </div>
            ))}
          </div>
        </div>
        <div className={`${price} ${!hasDiscount ? noDiscountPrice : ''}`}>
          {hasDiscount && <Discount discount_percent={discount_percent} />}
          <Prices
            initialFormatted={initial_formatted}
            finalFormatted={final_formatted}
          />
        </div>
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
  categories: PropTypes.array,
};

ProductCard.defaultProps = {
  name: '',
  id: '',
  platforms: {},
  price_overview: {},
  header_image: '',
  categories: [],
};
