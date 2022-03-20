import React, { useState } from "react";
import { useQuery } from "react-query";
import { useFetchVideos } from "../../hooks/queries";

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState([]);

  const { data, isLoading, isError } = useFetchVideos("videoList", {
    onSuccess: () => {
      setVideos(data);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  if (isLoading) return <>{"Loading..."}</>;

  console.log("videos", videos);

  return <div>VideoList</div>;
};

export default VideoList;
