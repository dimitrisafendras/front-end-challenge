import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './styles';

export const Prices = ({ initialFormatted, finalFormatted }) => {
  const {
    prices,
    initialPrice,
    finalPrice,
    freeToPlay,
  } = useStyles();

  const hasPrice = !!initialFormatted || !!finalFormatted;

  return (
    <>
      {hasPrice ? (
        <div className={prices}>
          {initialFormatted && <div className={initialPrice}>{initialFormatted}</div>}
          {finalFormatted && <div className={finalPrice}>{finalFormatted}</div>}
        </div>
      )
        : <div className={freeToPlay}>FREE TO PLAY</div>}
    </>
  );
};

Prices.propTypes = {
  initialFormatted: PropTypes.any,
  finalFormatted: PropTypes.any,
};

Prices.defaultProps = {
  initialFormatted: '',
  finalFormatted: '',
};
