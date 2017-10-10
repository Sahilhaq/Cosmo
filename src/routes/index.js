import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import Index from '../components/index';
import VueTube from '../components/vuetube/vuetube';
import WeatherCast from '../components/weathercast/weather_cast';
import Bblog from '../components/bblog/b_blog';
import PostNew from '../components/bblog/post_new';
import ShowPost from '../components/bblog/show_post';
import EditPost from '../components/bblog/post_edit';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="/VueTube" component={VueTube} />
		<Route path="/WeatherCast" component={WeatherCast} />
		<Route path="/Bblog" component={Bblog} />
		<Route path="/Bblog/new" component={PostNew} />
		<Route path="/Bblog/post/:id"  component={ShowPost} />
		<Route path="/Bblog/edit/:id" component={EditPost} />
	</Route>
);

//Bblog/post/:id(its a param/parameter anything after ':' this is a param )
// which will be passed as props to component exmple => component={ShowPost}