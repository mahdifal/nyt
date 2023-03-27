import axios from "axios";

export default axios.create({
  baseURL: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Hh4BBgBu5AyzPkLCAs7iccpOT2GM3E14`,
});
