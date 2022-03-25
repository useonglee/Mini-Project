import { createSearchParams, useNavigate } from "react-router-dom";
import { videoItemType } from "../../types/videos";
import * as Styled from "./styled";

interface Props {
  video: videoItemType;
}

function VideoCard({ video }: Props) {
  const { channelTitle, title, thumbnails } = video.snippet;
  const navigator = useNavigate();

  const hadleDetailPageInfo = () => {
    return navigator({
      pathname: "watch",
      search: `${createSearchParams({
        v: `${video.id}`,
      })}`,
    });
  };

  return (
    <Styled.VideoCardContainer onClick={hadleDetailPageInfo}>
      <img src={thumbnails.medium.url} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
      </div>
    </Styled.VideoCardContainer>
  );
}

export default VideoCard;
