import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyBD_yMI0Xg9KjVwZ8TCnUyAo60P3RDaBlU';

export default class VueTube extends Component {
	constructor(props){
			super(props);

			this.state = {
				videos: [],
				selectedVideo: null
			}
		
		this.videoSearch('')
	}
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		})
	}

	render() {
		const videoSearch = _.debounce( term => this.videoSearch(term), 300);

		return(
			<div>
				<div>
				<Link to="/">Bact to Menu</Link>
					<SearchBar onSearchTermChange={videoSearch} />
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
					videos={this.state.videos} 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					/>
				</div>
			</div>
		);
	}
}
