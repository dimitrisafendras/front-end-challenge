const baseUrl = 'https://htb-steam-api.vercel.app';

const allAppsUrl = `${baseUrl}/api/apps`; // (List all available apps)

const selectedAppUrl = (id) => `${baseUrl}/api/apps?appid=${id}`; // (List detailed information about specified app)

const trendingAppsUrl = `${baseUrl}/api/apps?tab=new_and_trending`; // (List new and trending apps)

const topSellerAppsUrl = `${baseUrl}/api/apps?tab=top_sellers`; // (List top seller apps)

const beingPlayedAppsUrl = `${baseUrl}/api/apps?tab=being_played`; // (List most being played apps)

const upcomingAppsUrl = `${baseUrl}/api/apps?tab=upcoming`; // (List future release apps)

export {
  allAppsUrl,
  selectedAppUrl,
  trendingAppsUrl,
  topSellerAppsUrl,
  beingPlayedAppsUrl,
  upcomingAppsUrl,
};
