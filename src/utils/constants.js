const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export const HAMBURGER_ICON =
  "https://www.svgrepo.com/show/312300/hamburger-menu.svg";

export const YOUTUBE_LOGO =
  "https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-970-80.jpg.webp";

export const SEARCH_ICON = "https://www.svgrepo.com/show/7109/search.svg";

export const USER_ICON =
  "https://cdn-icons-png.flaticon.com/512/149/149071.png";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
