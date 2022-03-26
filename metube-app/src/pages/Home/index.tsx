import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import DetailPage from "../Detail";
import { useFetchVideos } from "../../hooks/useFetchVideos";
import { videoItemType } from "../../types/videos";
import * as Styled from "./styled";

const VideoList = React.lazy(() => import("../../components/VideoList"));

function HomePage() {
  const [videos, setVideos] = useState<videoItemType[]>([]);
  const [selectVideo, setSelectVideo] = useState<videoItemType | null>(null);
  const { data, isLoading, error } = useFetchVideos();

  const handleVideoClick = (video: videoItemType) => {
    setSelectVideo(video);
  };

  const search = useCallback(
    (data: any) => {
      setVideos(data);
    },
    [videos]
  );

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    setVideos(data);
  }, [videos]);

  return (
    <Styled.PageLayout>
      <Header onSearch={search} />
      <Styled.ContentContainer>
        {selectVideo && (
          <Styled.VideoDetail>
            <DetailPage video={selectVideo} />
          </Styled.VideoDetail>
        )}
        <Styled.VideoList>
          <VideoList
            videos={videos}
            onVideoClick={handleVideoClick}
            isLoading={isLoading}
          />
        </Styled.VideoList>
      </Styled.ContentContainer>
    </Styled.PageLayout>
  );
}

export default HomePage;
