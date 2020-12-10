import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAllApps,
  selectAllApps,
} from '../../models/allApps';

export const AppsList = () => {
  const dispatch = useDispatch();
  const allApps = useSelector(selectAllApps);

  const allAppsStatus = useSelector((state) => state.apps.status);
  // const error = useSelector((state) => state.allApps.error);

  useEffect(() => {
    if (allAppsStatus === 'idle') {
      dispatch(fetchAllApps());
    }
  }, [allAppsStatus, dispatch]);

  console.log('allApps', allApps);

  return (
    <div />
  );
};