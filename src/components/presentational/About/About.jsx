import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Style from './about.module.scss';

import { LinksGrid, ScrollArrowTopOnly, ScrollArrowBottom, LoadingBounce } from 'components';
import { goToTop, goToBottom } from '../../../scrollBreakpoints.js';
import AboutMePic from '../../../images/aboutMe_compressed.jpeg';

export default function About() {
	const [top, setTop] = useState(true);
	const [loaded, setLoaded] = useState(false);

	const aboutMePic = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		const handleLoad = (event) => {
			setTimeout(() => {
				setLoaded(true);
			}, '1000');
		};

		const handleScroll = (event) => {
			// -----> state for transitioning out of top
			if (window.pageYOffset >= 10) {
				setTop(false);
			} else if (window.pageYOffset < 10) {
				setTop(true);
			}
		};

		let picture = aboutMePic.current;
		picture.addEventListener('load', handleLoad);
		window.addEventListener('scroll', handleScroll);

		return () => {
			picture.removeEventListener('load', handleLoad);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={!loaded ? Style.AboutPageLoading : Style.AboutPage}>
			<div className={Style.Right}></div>
			<div className={!loaded ? Style.LeftLoading : top ? Style.LeftTop : Style.LeftScroll}></div>
			<div className={!loaded ? Style.LoadingPage : Style.LoadingPageHide}>
				<LoadingBounce />
			</div>
			<main className={loaded ? Style.Main : Style.MainLoading}>
				<section className={top ? Style.AboutMe : Style.AboutMeScroll}>
					<div className={Style.Title}>
						<svg height='20' width='120'>
							<polyline
								className={Style.WDIcon}
								points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
							/>
						</svg>
						<div className={Style.Header}>ABOUT</div>
					</div>
					<h2 className={Style.Intro}>I'm Dalton, a Software engineer with bla bla bla</h2>
					<p className={Style.Intro}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
					</p>
					<p className={Style.Intro}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
						Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui. Officia
						vitae accusantium pariatur ullam eum.
					</p>
				</section>

				<div className={top ? Style.PhotoDiv : Style.PhotoDivScroll}>
					<img src={AboutMePic} alt='Dalton' ref={aboutMePic} />
				</div>

				<section className={top ? Style.CV : Style.CVScroll}>
					<h2>Education & Stuff</h2>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
						Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui. Officia
						vitae accusantium pariatur ullam eum.
					</p>
				</section>

				<section className={top ? Style.LinksHide : Style.Links}>
					<LinksGrid />
				</section>

				<div className={Style.ScrollArrow} onClick={goToBottom}>
					<ScrollArrowTopOnly />
				</div>
				<div className={Style.ScrollArrow} onClick={goToTop}>
					<ScrollArrowBottom />
				</div>
			</main>
		</div>
	);
}
