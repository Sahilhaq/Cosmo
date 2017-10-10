import React, { Component } from 'react';
import { Link } from 'react-router';

const apps = ['VueTube', 'WeatherCast', 'Bblog'];

const listItem = apps.map((app) => {
	return (
		<li key={app} className="list-group-item">
			<Link to={"/" + app}>
				<h3 className="app-name">{app}</h3>
			</Link>
	</li>
	);
});

export default class Index extends Component {
	render() {
		return(
			<div>
				<ul className="list-group">
					<li key="h3" className="list-group-item li-heading">
						<h3>Cosmo appliactions</h3>
					</li>
					{listItem}
				</ul>
			</div>
		);
	}
}