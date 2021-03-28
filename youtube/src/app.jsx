import React, { useState, useEffect, useCallback } from 'react';
import styles from './app.module.css';
import Searchheader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  }

  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
      })
  }, [youtube]);

  // 마운트 되었을 때만 호출
  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos))
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Searchheader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
        )}
        <div className={styles.list}>
          {/* 부모에서 자식노드에게 구조적인 스타일링을 해야 한다면 
          div 엘리먼트로 한 번 더 감싸야 된다.*/}
        <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
}

export default App;
