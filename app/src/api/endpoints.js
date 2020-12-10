const baseUrl = 'https://htb-steam-api.vercel.app/api';

const allAppsUrl = `${baseUrl}/apps`; // (List all available apps)

const selectedAppUrl = (id) => `${baseUrl}/apps?appid=${id}`; // (List detailed information about specified app)

const trendingAppsUrl = `${baseUrl}/apps?tab=new_and_trending`; // (List new and trending apps)

const topSellerAppsUrl = `${baseUrl}/apps?tab=top_sellers`; // (List top seller apps)

const beingPlayedAppsUrl = `${baseUrl}/apps?tab=being_played`; // (List most being played apps)

const upcomingAppsUrl = `${baseUrl}/apps?tab=upcoming`; // (List future release apps)

export {
  allAppsUrl,
  selectedAppUrl,
  trendingAppsUrl,
  topSellerAppsUrl,
  beingPlayedAppsUrl,
  upcomingAppsUrl,
};
