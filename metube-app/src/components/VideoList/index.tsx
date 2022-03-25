import VideoCard from "../VideoCard";
import { videoItemType } from "../../types/videos";
import * as Styled from "./styled";

interface Props {
  videos: videoItemType[];
}

function VideoList({ videos }: Props) {
  return (
    <Styled.VideoListContainer>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </Styled.VideoListContainer>
  );
}

export default VideoList;
