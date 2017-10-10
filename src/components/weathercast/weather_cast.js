import React, { Component } from 'react';
import { Link } from 'react-router';

import SearchBar from './search-bar';
import WeatherList from './weather-list';

export default class WeatherCast extends Component {
	render() {
		return (
			<div>
				<Link to="/" className="b-margin">Back to Menu</Link>
				<SearchBar />
				<WeatherList />
			</div>
		);
	}
}