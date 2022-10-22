import { React, useState, useEffect, useRef } from 'react';
import Style from './portfolio.module.scss';
import { LinksLine, ScrollArrowTopOnly, ScrollArrowBottom, LoadingBounce } from 'components';

const goalsAppImg = require('../../../images/goals_app.png');
const weatherAppImg = require('../../../images/weather_app.png');
const findFirmImg = require('../../../images/find_firm.png');

export default function Portfolio() {
	const [top, setTop] = useState(true);
	const [loaded, setLoaded] = useState(false);
	const [seeLinks, setSeeLinks] = useState(false);

	// const pic1 = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		// const handleLoad = (event) => {
		setTimeout(() => {
			setLoaded(true);
		}, '1000');
		// };

		const handleScroll = (event) => {
			// -----> state for transitioning out of top
			if (window.pageYOffset >= 1) {
				setTop(false);
			} else if (window.pageYOffset < 1) {
				setTop(true);
			}
			if (window.pageYOffset >= document.documentElement.scrollHeight - window.innerHeight - 300) {
				setSeeLinks(true);
			}
			if (window.pageYOffset < document.documentElement.scrollHeight - window.innerHeight - 600) {
				setSeeLinks(false);
			}
		};

		// let picture1 = pic1.current;
		// picture1.addEventListener('load', handleLoad);
		window.addEventListener('scroll', handleScroll);

		return () => {
			// picture1.removeEventListener('load', handleLoad);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={!loaded ? Style.PortfolioLoading : Style.Portfolio}>
			<div className={!loaded ? Style.OpenScreen : Style.OpenScreenLoaded}></div>
			<div className={!loaded ? Style.LoadingPage : Style.LoadingPageHide}>
				<LoadingBounce />
			</div>
			<main className={loaded ? Style.Main : Style.MainLoading}>
				<section className={Style.Work}>
					<div className={Style.Title}>
						<svg height='20' width='120'>
							<polyline
								className={Style.Icon}
								points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
							/>
						</svg>
						<div className={Style.Header}>
							WO
							<br />
							RK.
						</div>
						<div className={Style.HeaderMobile}>WORK.</div>
					</div>
					<div className={top ? Style.Intro : Style.IntroScroll}>
						<h2>Say some stuff about what I like to code.</h2>
						<p>Besides this website, I've made a few sites and apps.</p>
					</div>
				</section>
				<section className={Style.Projects}>
					<div className={Style.Red}></div>
					<div className={Style.Blue}></div>
					<div className={Style.Green}></div>
					<div className={Style.Yellow}></div>
				</section>
			</main>
		</div>
		// <div className={Style.Portfolio}>
		// 	<section className={Style.GoalsApp}>
		// 		<div className={Style.Description}>
		// 			<h4>Web App</h4>
		// 			<h3>Weekly Goal Scheduler</h3>
		// 		</div>
		// 		<a href='https://weekly-goals-app.web.app/' target='_blank' rel='noopener noreferrer'>
		// 			<img className={Style.Image} src={goalsAppImg} alt='weekly goals app' />
		// 		</a>
		// 	</section>
		// 	<section className={Style.WeatherApp}>
		// 		<div className={Style.Description}>
		// 			<h4>Web App</h4>
		// 			<h3>Weather App</h3>
		// 		</div>
		// 		<a href='https://weather-app-cbb20.web.app/' target='_blank' rel='noopener noreferrer'>
		// 			<img className={Style.Image} src={weatherAppImg} alt='weekly goals app' />
		// 		</a>
		// 	</section>
		// 	<section className={Style.FindFirm}>
		// 		<div className={Style.Description}>
		// 			<h4>Web Page</h4>
		// 			<h3>The Find Firm, LLC</h3>
		// 		</div>
		// 		<a href='http://thefindfirm.com/' target='_blank' rel='noopener noreferrer'>
		// 			<img className={Style.Image} src={findFirmImg} alt='weekly goals app' />
		// 		</a>
		// 	</section>
		// </div>
	);
}
