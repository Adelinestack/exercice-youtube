import React from 'react';

function VideoItem(props) {
  const onClick = () => props.onImageClick(props.videoId);
  return (
    <div onClick={onClick}>
      <img src={props.thumbnail} alt={props.title} />
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default VideoItem;
