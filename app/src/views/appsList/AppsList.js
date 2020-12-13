import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  fetchAllApps,
  selectAllApps,
} from '../../models/allApps';
import { AppListLayout } from '../../genericComponents';
import { fetchTopSellerApps, selectTopSellerApps } from '../../models/topSellerApps';
import { fetchTrendingApps, selectTrendingApps } from '../../models/trendingApps';
import { ProductCard } from './components/productCard';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

export const AppsList = () => {
  const [value, setValue] = React.useState(0);
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

  const showApps = (appsList) => appsList.map(({
    _id,
    name,
    platforms,
    price_overview,
    header_image,
  }) => (
    <ProductCard
      key={_id}
      id={_id}
      name={name}
      platforms={platforms}
      price_overview={price_overview}
      header_image={header_image}
    />
  ));

  return (
    <AppListLayout>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="All Items" {...a11yProps(0)} />
          <Tab label="Top Sellers" {...a11yProps(1)} />
          <Tab label="Trending Now" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {allApps && showApps(allApps)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {allApps && showApps(topSellerApps)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {allApps && showApps(trendingApps)}
      </TabPanel>
    </AppListLayout>
  );
};
