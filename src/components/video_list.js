import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videos = props.videos;
  const onClick = props.onClick;

  const onClickItem = (index) => { 
    onClick(index);
  }

  const videoItems = props.videos.map((video, idx) => {
    return <VideoListItem key={video.etag} video={video} index={idx} onClick={onClickItem} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};


export default VideoList;

