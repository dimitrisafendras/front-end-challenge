import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles';

export const Relevance = ({
  className,
  categories,
}) => {
  const {
    relevance,
    title,
    container,
    item,
    icon,
    text,
  } = useStyles();

  console.log('catch', categories);

  return (
    <div className={`${className} ${relevance}`}>
      <div className={title}> Is this game relevant to you? </div>
      <div className={container}>
        <div className={item}>
          <div className={icon} />
          <div className={text} />
        </div>
      </div>
    </div>
  );
};

Relevance.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.array,
};

Relevance.defaultProps = {
  className: '',
  categories: [],
};
