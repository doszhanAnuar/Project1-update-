import axios from "axios";
const KEY = "AIzaSyAkcKTRKCRFcRBFoDtgLWHu04NuebdD2tY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    key: KEY,
  },
  headers: {},
});
