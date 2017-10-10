import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelect}) => {
	
	const videoItem = videos.map((video) => {
		return <VideoListItem 
				key={video.etag}
				video={video} 
				onVideoSelect={onVideoSelect}
				/>
	})

	return (
		<ul className="list-group col-md-4 top-margin">
			{videoItem}
		</ul>
	);
}

export default VideoList;