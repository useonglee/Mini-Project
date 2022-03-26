import { videoItemType } from "../../types/videos";

interface Props {
  video: videoItemType;
}

function DetailPage({ video }: Props) {
  console.log("video", video);
  return (
    <section>
      <iframe
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
      <p>{video.snippet.channelTitle}</p>
    </section>
  );
}

export default DetailPage;
