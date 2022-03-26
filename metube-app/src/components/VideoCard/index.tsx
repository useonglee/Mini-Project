import { videoItemType } from "../../types/videos";
import Loading from "../Loading";
import * as Styled from "./styled";

interface Props {
  video: videoItemType;
  onVideoClick: (video: videoItemType) => void;
  isLoading: boolean;
}

function VideoCard({ video, onVideoClick, isLoading }: Props) {
  const { channelTitle, title, thumbnails } = video.snippet;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Styled.VideoCardContainer onClick={() => onVideoClick(video)}>
          <div>
            <img src={thumbnails.medium.url} />
            <div>
              <p>{title}</p>
              <p>{channelTitle}</p>
            </div>
          </div>
        </Styled.VideoCardContainer>
      )}
    </>
  );
}

export default VideoCard;
