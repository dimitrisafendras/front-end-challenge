import React from 'react';
import PropTypes from 'prop-types';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
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
        {categories.map(({ id, description }) => (
          <div className={item} key={id}>
            <div className={icon}>
              <SportsEsportsIcon />
            </div>
            <div className={text}>
              {description}
            </div>
          </div>
        ))}
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
