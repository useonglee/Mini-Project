import axios from "axios";

const createAxios = () => {
  return axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
  });
};

export const axiosService = createAxios();
