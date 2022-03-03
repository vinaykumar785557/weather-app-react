import React, { useState } from 'react';

import './style.css';

function Search() {
	const [searchCity, setSearchCity] = useState('');

	const changeHandler = (event) => setSearchCity(event.target.value);

	const submitHandler = (event) => {
		event.preventDefault();

		setSearchCity('');
	};

	return (
		<div className='wrap'>
			<div className='search'>
				<input
					type='search'
					placeholder='Search City '
					id='search'
					onChange={changeHandler}
					value={searchCity}></input>
			</div>
			<button className='searchButton' onClick={submitHandler}>
				Search
			</button>
		</div>
	);
}

export default Search;
