import React from 'react';
import './style.css';

const currentDate = new Date().toLocaleString();
function WeatherDetails() {
	return (
		<>
			<article className='widget'>
				<div className='weatherIcon'>
					<i className='wi wi-day-sunny'></i>
				</div>
				<div className='weatherInfo'>
					<div className='temperature'>
						<span>30&deg;c</span>
					</div>
					<div className='description'>
						<div className='weatherCondition'>Sunny</div>
						<div className='place'>Mumbai, IN</div>
					</div>
				</div>
				<div className='date'>{currentDate}</div>
				<div className='extra-temp'>
					<div className='temp-info-minmax'>
						<div className='two-sided-section'>
							<p>
								<i className={'wi wi-sunset'}></i>
							</p>
							<p className='extra-info-leftside'>
								6.30 PM <br />
								Sunset
							</p>
						</div>

						<div className='two-sided-section'>
							<p>
								<i className={'wi wi-humidity'}></i>
							</p>
							<p className='extra-info-leftside'>
								64 <br />
								Humidity
							</p>
						</div>
					</div>

					<div className='temp-info-minmax'>
						<div className='two-sided-section'>
							<p>
								<i className={'wi wi-rain'}></i>
							</p>
							<p className='extra-info-leftside'>
								1016 <br />
								Pressure
							</p>
						</div>

						<div className='two-sided-section'>
							<p>
								<i className={'wi wi-strong-wind'}></i>
							</p>
							<p className='extra-info-leftside'>
								60 kmph <br />
								Windspeed
							</p>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}

export default WeatherDetails;
