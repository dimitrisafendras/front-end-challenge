import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useStyles } from './styles';

export const Carousel = ({ classes, screenshots }) => {
  const {
    carousel,
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
    <div className={`${classes} ${carousel}`}>
      <Slider {...settings}>
        {screenshots.map(({ id, path_full }) => <img key={id} src={path_full} alt="" />)}
      </Slider>
    </div>
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
