import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './styles';

export const Info = ({
  className,
  headerImage,
  shortDescription,
  releaseDate: { date },
  developers,
  publishers,
}) => {
  const {
    info,
    img,
    shortDesc,
    textContainer,
    greyText,
  } = useStyles();

  return (
    <div className={`${className} ${info}`}>
      <img src={headerImage} alt="" className={img} />
      <div className={shortDesc}>
        { shortDescription }
      </div>
      <div className={textContainer}>
        <span className={greyText}>RELEASE DATE: </span>
        <span>{date}</span>
      </div>
      <div className={textContainer}>
        <span className={greyText}>DEVELOPER: </span>
        <span>{developers}</span>
      </div>
      <div className={textContainer}>
        <span className={greyText}>PUBLISHER: </span>
        <span>{publishers}</span>
      </div>
    </div>
  );
};

Info.propTypes = {
  className: PropTypes.string,
  headerImage: PropTypes.string,
  shortDescription: PropTypes.string,
  releaseDate: PropTypes.object,
  developers: PropTypes.array,
  publishers: PropTypes.array,
};

Info.defaultProps = {
  className: '',
  headerImage: '',
  shortDescription: '',
  releaseDate: {},
  developers: [],
  publishers: [],
};
