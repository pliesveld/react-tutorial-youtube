import React from 'react';

const VideoListItem = (props) => {

  const video = props.video;
  const index = props.index;
  const imageUrl = video.snippet.thumbnails.default.url;

  const onVideoListItemClick = (event) => props.onClick(index, event);

  return (
    <li className="list-group-item">
      <div className="video-list media" onClick={onVideoListItemClick}>
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
