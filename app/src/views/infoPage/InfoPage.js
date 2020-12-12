import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { InfoPageLayout } from '../../genericComponents';
import { fetchSelectedApp, selectSelectedApp } from '../../models/selectedApp';
import { useStyles } from './styles';

export const InfoPage = ({ match }) => {
  const dispatch = useDispatch();
  const { selectedApp } = useSelector(selectSelectedApp);
  const { name } = selectedApp[0] || {};
  const id = match?.params?.appId || 0;
  const {
    backBtn,
    title,
    carousel,
    info,
    about,
    link,
  } = useStyles();

  useEffect(() => {
    dispatch(fetchSelectedApp(id));
  }, [id]);

  return (
    <InfoPageLayout
      className={info}
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
      <div className={info} />
      <div className={about} />
    </InfoPageLayout>
  );
};

InfoPage.propTypes = { match: PropTypes.object };

InfoPage.defaultProps = { match: {} };
