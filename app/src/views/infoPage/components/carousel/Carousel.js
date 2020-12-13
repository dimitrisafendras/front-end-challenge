import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useStyles } from './styles';

export const Carousel = ({ classes, screenshots }) => {
  const {
    carousel,
    image,
  } = useStyles();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings} className={`${classes} ${carousel}`}>
      {screenshots.map(({ id, path_full }) => <img key={id} src={path_full} alt="" className={image} />)}
    </Slider>
  );
};

Carousel.propTypes = {
  classes: PropTypes.string,
  screenshots: PropTypes.array,
};

Carousel.defaultProps = {
  classes: '',
  screenshots: [],
};
