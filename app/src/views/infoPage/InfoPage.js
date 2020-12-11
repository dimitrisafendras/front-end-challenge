import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedApp, selectSelectedApp } from '../../models/selectedApp';
import { useStyles } from './styles';

export const InfoPage = (props) => {
  const dispatch = useDispatch();
  const { selectedApp } = useSelector(selectSelectedApp);
  const {
    infoPage,
  } = useStyles();

  const id = props.match.params.appId || 0;

  const selectedAppStatus = useSelector((state) => state.selectedApp.status);

  useEffect(() => {
    if (selectedAppStatus === 'idle') {
      dispatch(fetchSelectedApp(id)());
    }
  }, [selectedAppStatus, dispatch]);

  return (
    <div className={infoPage} />
  );
};

InfoPage.propTypes = {};

InfoPage.defaultProps = {};
