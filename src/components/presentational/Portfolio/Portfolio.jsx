import { React, useState, useEffect, useRef } from 'react';
import Style from './portfolio.module.scss';
import { LinksLine, LoadingBounce, ScrollArrowSide } from 'components';

const goalsAppImg = require('../../../images/goals_app.png');
const weatherAppImg = require('../../../images/weather_app.png');
const findFirmImg = require('../../../images/find_firm.png');
const lifeImprovements = require('../../../images/life_improvements.png');
const gifTest = require('../../../gifs/react-render-animated-gif.gif');

export default function Portfolio() {
	const [top, setTop] = useState(true);
	const [loaded, setLoaded] = useState(false);
	const [seeLinks, setSeeLinks] = useState(false);

	const [playGif1, setPlayGif1] = useState(false);
	const [playGif2, setPlayGif2] = useState(false);
	const [playGif3, setPlayGif3] = useState(false);

	// const pic1 = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		// const handleLoad = (event) => {
		setTimeout(() => {
			setLoaded(true);
		}, '1000');
		// };

		const handleScroll = (event) => {
			console.log(window.pageYOffset);
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
			{/* {loaded && <ScrollArrowSide />} */}
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
					<div
						className={Style.GoalsApp}
						onMouseEnter={() => setPlayGif1(true)}
						onMouseLeave={() => setPlayGif1(false)}>
						<a
							className={Style.Anchor}
							href='https://weekly-goals-app.web.app/'
							target='_blank'
							rel='noopener noreferrer'>
							<div className={Style.Description}>
								<h4>Web App</h4>
								<h3>Weekly Goal Scheduler</h3>
							</div>
							{/* <div className={Style.Images}> */}
							<img className={Style.Image} src={goalsAppImg} alt='weekly goals app' />
							{/* <img
								className={playGif1 ? Style.GifPlay : Style.Gif}
								src={gifTest}
								alt='weekly goals app gif'
							/> */}
							{/* </div> */}
						</a>
					</div>
					<div className={Style.FindFirm}>
						<a
							className={Style.Anchor}
							href='http://thefindfirm.com/'
							target='_blank'
							rel='noopener noreferrer'>
							<div className={Style.Description}>
								<h4>Web Page</h4>
								<h3>The Find Firm, LLC</h3>
							</div>
							<img className={Style.Image} src={findFirmImg} alt='the find firm' />
						</a>
					</div>
					<div className={Style.WeatherApp}>
						<a
							className={Style.Anchor}
							href='https://weather-app-cbb20.web.app/'
							target='_blank'
							rel='noopener noreferrer'>
							<div className={Style.Description}>
								<h4>Web App</h4>
								<h3>Weather App</h3>
							</div>
							<img className={Style.Image} src={weatherAppImg} alt='weather app' />
						</a>
					</div>
					<div className={Style.lifeImprovements}>
						<div className={Style.Anchor}>
							<div className={Style.Description}>
								<h4>Web Page</h4>
								<h3>Life Improvements</h3>
							</div>
							{/* <a href='' target='_blank' rel='noopener noreferrer'> */}
							<img className={Style.Image} src={lifeImprovements} alt='life improvements' />
							{/* </a> */}
						</div>
					</div>
				</section>
				{/* <div className={Style.BottomBackground}></div> */}
				<section className={seeLinks ? Style.Links : Style.LinksHide}>
					<LinksLine color='white' opacity='1' />
				</section>
			</main>
		</div>
	);
}
