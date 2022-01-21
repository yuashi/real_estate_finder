import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "4a5cc6bfcfmsh3ac860ba82415ccp164ea1jsn1d227b0e6ba1",
    },
  });
  return data;
};
