import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { InfoPageLayout } from '../../genericComponents';
import { fetchSelectedApp, selectSelectedApp } from '../../models/selectedApp';
import { Info } from './components';
import { useStyles } from './styles';

export const InfoPage = ({ match }) => {
  const dispatch = useDispatch();
  const { selectedApp } = useSelector(selectSelectedApp);
  const {
    name, background, header_image, short_description, release_date, developers, publishers, ...rest
  } = selectedApp[0] || {};
  console.log('rest', rest);

  const id = match?.params?.appId || 0;
  const {
    backBtn,
    title,
    carousel,
    info,
    price,
    relevance,
    about,
    link,
  } = useStyles();

  useEffect(() => {
    dispatch(fetchSelectedApp(id));
  }, [id]);

  return (
    <InfoPageLayout
      className={info}
      styles={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Link to="/" className={link}>
        <Button
          className={backBtn}
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Back to the games list
        </Button>
      </Link>
      <div className={title}>{name}</div>
      <div className={carousel} />
      <Info
        className={info}
        headerImage={header_image}
        shortDescription={short_description}
        releaseDate={release_date}
        developers={developers}
        publishers={publishers}
      />
      <div className={price} />
      <div className={relevance} />
      <div className={about} />
    </InfoPageLayout>
  );
};

InfoPage.propTypes = { match: PropTypes.object };

InfoPage.defaultProps = { match: {} };
