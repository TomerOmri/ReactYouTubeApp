import React from 'react';

import VideoListItem from './video_list_item';


const VideoList = (props) => {

    // refferencing js variable in {}
    // key={video.etag} so we will have unik Key for each video
    // so we wont need to render them all on every change
  const videoItems =  props.videos.map( (video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}

        />
    });


    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;