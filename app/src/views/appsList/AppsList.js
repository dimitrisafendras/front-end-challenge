import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchAllApps,
  selectAllApps,
} from '../../models/allApps';
import { AppListLayout } from '../../genericComponents';
import { fetchTopSellerApps } from '../../models/topSellerApps';
import { fetchTrendingApps } from '../../models/trendingApps';
import { ProductCard } from './components/productCard';

export const AppsList = () => {
  const dispatch = useDispatch();
  const { allApps } = useSelector(selectAllApps);

  const allAppsStatus = useSelector((state) => state.apps.status);

  useEffect(() => {
    if (allAppsStatus === 'idle') {
      dispatch(fetchAllApps());
      dispatch(fetchTopSellerApps());
      dispatch(fetchTrendingApps());
    }
  }, [allAppsStatus, dispatch]);

  return (
    <AppListLayout>
      {allApps && allApps.map(({ _id, ...rest }) => <ProductCard key={_id} id={_id} {...rest} />)}
    </AppListLayout>
  );
};
