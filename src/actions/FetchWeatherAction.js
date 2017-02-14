import $ from 'jquery';
// import axios from 'axios';

const api_key = '95fbb87f38e5aec23f3c1d0d89ff9d59';
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + api_key + '&zip=';

export default function GetTheWeather() {
	return {
		type: 'getWeather',
		payload: []
	}
}

// actions return one property and the property has to have one type
//payload is a reducer - this reducer is optionally going to update its state to