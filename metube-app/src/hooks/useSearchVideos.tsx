import { useQuery } from "react-query";
import { axiosService } from "../api";

const searchVideos = async (query: string) => {
  const response = await axiosService.get("search", {
    params: {
      part: "snippet",
      maxResults: 25,
      type: "video",
      q: query,
    },
  });

  return response?.data.items.map((item: any) => ({
    ...item,
    id: item.id.videoId,
  }));
};

export const useSearchVideos = (query: string, options?: any) => {
  return useQuery(["search", query], () => searchVideos(query), options);
};
