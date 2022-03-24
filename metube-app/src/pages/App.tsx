import { useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import VideoList from "../components/VideoList";
import { useFetchVideos } from "../hooks/useFetchVideos";

function App() {
  const [videos, setVideos] = useState([]);

  const { data, isLoading } = useFetchVideos({
    onSuccess: () => {
      setVideos(data);
    },
    onError: (error: any) => {
      console.log(error);
    },
  });

  if (isLoading) return <Loading />;

  return (
    <>
      <Header setVideos={setVideos} />
      <VideoList />
    </>
  );
}

export default App;
