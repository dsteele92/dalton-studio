import { React, useState, useEffect, useRef } from 'react';
import Style from './portfolio.module.scss';

const goalsAppImg = require('../../../images/goals_app.png');
const weatherAppImg = require('../../../images/weather_app.png');
const findFirmImg = require('../../../images/find_firm.png');

export default function Portfolio() {
	return (
		<div className={Style.Portfolio}>
			<section className={Style.GoalsApp}>
				<div className={Style.Description}>
					<h4>Web App</h4>
					<h3>Weekly Goal Scheduler</h3>
				</div>
				<a href='https://weekly-goals-app.web.app/' target='_blank' rel='noopener noreferrer'>
					<img className={Style.Image} src={goalsAppImg} alt='weekly goals app' />
				</a>
			</section>
			<section className={Style.WeatherApp}>
				<div className={Style.Description}>
					<h4>Web App</h4>
					<h3>Weather App</h3>
				</div>
				<a href='https://weather-app-cbb20.web.app/' target='_blank' rel='noopener noreferrer'>
					<img className={Style.Image} src={weatherAppImg} alt='weekly goals app' />
				</a>
			</section>
			<section className={Style.FindFirm}>
				<div className={Style.Description}>
					<h4>Web Page</h4>
					<h3>The Find Firm, LLC</h3>
				</div>
				<a href='http://thefindfirm.com/' target='_blank' rel='noopener noreferrer'>
					<img className={Style.Image} src={findFirmImg} alt='weekly goals app' />
				</a>
			</section>
		</div>
	);
}
