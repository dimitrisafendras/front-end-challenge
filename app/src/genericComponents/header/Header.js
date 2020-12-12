import React from 'react';
import { steamLogo } from '../../static';
import { useStyles } from './styles';

export const Header = () => {
  const {
    header,
  } = useStyles();

  return (
    <div className={header}>
      <img src={steamLogo} alt="" />
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};
