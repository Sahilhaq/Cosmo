import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import WeatherReducer from './reducer_weather';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
