import axios from "axios";

export default axios.create({
  baseURL: `https://api.nytimes.com/svc/search/v2`,
});
