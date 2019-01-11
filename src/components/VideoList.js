import React from 'react';
import VideoItem from './VideoItem';

function VideoList(props) {
  const videoList = props.videos.map(video => (
    <VideoItem
      key={video.id}
      videoId={video.id}
      title={video.title}
      thumbnail={video.thumbnails.high.url}
      description={video.description}
      onImageClick={props.onImageClick}
    />
  ));

  return <div>{videoList}</div>;
}

export default VideoList;
