import PropTypes from 'prop-types';
import React from 'react';
import { appleLogo, linuxLogo, windowsLogo } from '../../../../static';
import { useStyles } from './styles';

export const InfoPrice = ({
  name,
  className,
  discount = 40,
  initialPrice = '120',
  finalPrice = '200',
  platforms: {
    windows,
    mac,
    linux,
  },
}) => {
  const {
    infoPrice,
    name: nameStyle,
    logo,
    platforms,
  } = useStyles();

  return (
    <div className={`${className} ${infoPrice}`}>
      <div className={nameStyle}>{name}</div>
      <div className={platforms}>
        {windows && <img src={windowsLogo} alt="" className={logo} />}
        {mac && <img src={appleLogo} alt="" className={logo} />}
        {linux && <img src={linuxLogo} alt="" className={logo} />}
      </div>
    </div>
  );
};

InfoPrice.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  initialPrice: PropTypes.string,
  finalPrice: PropTypes.string,
  discount: PropTypes.number,
  platforms: PropTypes.object,
};

InfoPrice.defaultProps = {
  name: '',
  className: '',
  initialPrice: '',
  finalPrice: '',
  platforms: {},
  discount: null,
};
