import React from 'react';

function VideoPlayer(props) {
  return (
    <div>
      <iframe src={props.videoUrl} />
    </div>
  );
}

export default VideoPlayer;
