import React, { Suspense, useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import DetailPage from "../detail";
import { useFetchVideos } from "../../hooks/useFetchVideos";
import { videoItemType } from "../../types/videos";
import * as Styled from "./styled";

const VideoList = React.lazy(() => import("../../components/VideoList"));

function HomePage() {
  const [videos, setVideos] = useState<videoItemType[]>([]);
  const { data, error } = useFetchVideos();

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
    const videoItems = data.items;
    setVideos(videoItems);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Styled.PageLayout>
        <Header onSearch={search} />
        <Styled.ContentContainer>
          <VideoList videos={videos} />
        </Styled.ContentContainer>
      </Styled.PageLayout>
    </Suspense>
  );
}

export default HomePage;
