import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedApp, selectSelectedApp } from '../../models/selectedApp';
import { useStyles } from './styles';

export const InfoPage = ({ match }) => {
  const dispatch = useDispatch();
  const { selectedApp } = useSelector(selectSelectedApp);
  const { name } = selectedApp[0] || {};
  const id = match?.params?.appId || 0;
  const {
    infoPage,
  } = useStyles();

  useEffect(() => {
    dispatch(fetchSelectedApp(id));
  }, [id]);

  return (
    <div className={infoPage}>
      {name}
    </div>
  );
};

InfoPage.propTypes = { match: PropTypes.object };

InfoPage.defaultProps = { match: {} };
