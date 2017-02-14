// To make a root reducer:
// 1. Use combineReducers method (from redux)
// 2. Pass it an Object
// 3. Each key will be a piece of application state
// 4. Each value will be a single reducer

import { combineReducers } from 'redux';
import WeatherReducer from './WeatherReducer';
import MovieReducer from './MovieReducer';

const rootReducer = combineReducers({
	weather: WeatherReducer,
	movie: MovieReducer
});

export default rootReducer;