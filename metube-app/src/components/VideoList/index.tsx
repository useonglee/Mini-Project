import VideoCard from "../VideoCard";
import { videoItemType } from "../../types/videos";
import * as Styled from "./styled";

interface Props {
  videos: videoItemType[];
  onVideoClick: (video: videoItemType) => void;
  isLoading: boolean;
}

function VideoList({ videos, onVideoClick, isLoading }: Props) {
  return (
    <Styled.VideoListContainer>
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          isLoading={isLoading}
        />
      ))}
    </Styled.VideoListContainer>
  );
}

export default VideoList;
