import React, { useCallback, useEffect, useState } from 'react';

import './style.css';
import WeatherDetails from './WeatherDetails';

function Search() {
	const [searchCity, setSearchCity] = useState('');

	const [tempInfo, setTempInfo] = useState({});

	const changeHandler = (event) => setSearchCity(event.target.value);

	const getWeatherInfo = useCallback(async () => {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=c6e85c3d87c3b6bedf140004e566c763`;

			let res = await fetch(url);
			let data = await res.json();

			const { temp, humidity, pressure } = data.main;
			const { main: weatherType } = data.weather[0];
			const { name } = data;
			const { speed } = data.wind;
			const { country, sunset } = data.sys;

			const myNewWeatherInfo = {
				temp,
				humidity,
				pressure,
				weatherType,
				name,
				speed,
				country,
				sunset,
			};

			setTempInfo(myNewWeatherInfo);

			// console.log(data);
		} catch (error) {
			console.log(error);
		}
	}, [searchCity]);

	useEffect(() => {
		getWeatherInfo();
	}, [getWeatherInfo, searchCity]);

	return (
		<>
			<div className='wrap'>
				<div className='search'>
					<input
						type='search'
						placeholder='Search City '
						id='search'
						onChange={changeHandler}
						value={searchCity}></input>
				</div>
				<button className='searchButton' onClick={getWeatherInfo}>
					Search
				</button>
			</div>
			<WeatherDetails {...tempInfo} />
		</>
	);
}

export default Search;
