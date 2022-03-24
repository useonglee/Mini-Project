import { useQuery } from "react-query";
import { axiosService } from "../api";

const fetchVideos = async () => {
  const response = await axiosService.get("videos", {
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 25,
    },
  });

  return response?.data;
};

export const useFetchVideos = (options: any) => {
  return useQuery("videoList", () => fetchVideos(), options);
};
