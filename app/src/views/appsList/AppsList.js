import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { TabPanel, ProductCard } from './components';
import { useStyles } from './styles';
import {
  fetchAllApps,
  selectAllApps,
} from '../../models/allApps';
import { AppListLayout } from '../../genericComponents';
import { fetchTopSellerApps, selectTopSellerApps } from '../../models/topSellerApps';
import { fetchTrendingApps, selectTrendingApps } from '../../models/trendingApps';

export const AppsList = () => {
  const {
    appBar,
    appList,
  } = useStyles();

  const [value, setValue] = useState(0);
  const [filterText, setFilterText] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const { allApps } = useSelector(selectAllApps);
  const { topSellerApps } = useSelector(selectTopSellerApps);
  const { trendingApps } = useSelector(selectTrendingApps);

  const allAppsStatus = useSelector((state) => state.apps.status);

  useEffect(() => {
    if (allAppsStatus === 'idle') {
      dispatch(fetchAllApps());
      dispatch(fetchTopSellerApps());
      dispatch(fetchTrendingApps());
    }
  }, [allAppsStatus, dispatch]);

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  const showApps = (appsList, size) => appsList
    .slice(0, size)
    .filter(({ name }) => name.toUpperCase().includes(filterText.toUpperCase()))
    .map(({
      _id,
      name,
      platforms,
      price_overview,
      header_image,
      categories,
    }) => (
      <ProductCard
        key={_id}
        id={_id}
        name={name}
        platforms={platforms}
        price_overview={price_overview}
        header_image={header_image}
        categories={categories}
      />
    ));

  return (
    <AppListLayout>
      <TextField
        label="Search"
        onChange={(
          event,
        ) => setFilterText(event.target.value)}
      />
      <AppBar position="static" className={appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
        >
          <Tab label="All Items" {...a11yProps(0)} />
          <Tab label="Top Sellers" {...a11yProps(1)} />
          <Tab label="Trending Now" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={appList}>
        {allApps && showApps(allApps)}
      </TabPanel>
      <TabPanel value={value} index={1} className={appList}>
        {allApps && showApps(topSellerApps, 10)}
      </TabPanel>
      <TabPanel value={value} index={2} className={appList}>
        {allApps && showApps(trendingApps, 10)}
      </TabPanel>
    </AppListLayout>
  );
};
