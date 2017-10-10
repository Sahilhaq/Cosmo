import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const API_WEATHER_KEY = 'c51492d11bde7439e566ee7ce2b2f895';
const API_POST_KEY = '?key=c6564reg87hh4r58h4r8th45454ghh45gf4';

const ROOT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_WEATHER_KEY}`;
const ROOT_POST_URL = `http://reduxblog.herokuapp.com/api`;

const post_url = `${ROOT_POST_URL}/posts${API_POST_KEY}`;

export function fetchWeather(city) {
    const request = axios.get(`${ROOT_WEATHER_URL}&q=${(city)},us`)

    console.log('request:', request)
    return {
        type: FETCH_WEATHER,
        playload: request
    }
}

export function fetchPosts() {
    const request = axios.get(post_url);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(props) {
    const request = axios.post(post_url, props);

    return {
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_POST_URL}/posts/${id}${API_POST_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id) {
    const request = axios.delete(`${ROOT_POST_URL}/posts/${id}${API_POST_KEY}`);

    return {
        type: DELETE_POST,
        payload: request
    }
}

export function editPost(id, props) {
    const request = axios.post(`${ROOT_POST_URL}/posts/${id}${API_POST_KEY}`, props);

    return {
        type: EDIT_POST,
        payload: request
    }
}