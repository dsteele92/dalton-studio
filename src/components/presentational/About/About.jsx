import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './about.module.scss';

import { LinksGrid, ScrollArrowTopOnly, ScrollArrow } from 'components';
import AboutMePic from '../../../images/aboutMe_compressed.jpeg';

export default function About() {
	const [top, setTop] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);

		const handleScroll = (event) => {
			// -----> state for transitioning out of top
			if (window.pageYOffset >= 10) {
				setTop(false);
			} else if (window.pageYOffset < 10) {
				setTop(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={Style.AboutPage}>
			<div className={Style.Right}></div>
			<div className={top ? Style.LeftTop : Style.LeftScroll}></div>
			<main>
				<section className={top ? Style.AboutMe : Style.AboutMeScroll}>
					<div className={Style.Title}>
						<svg height='20' width='120'>
							<polyline
								className={Style.WDIcon}
								points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
							/>
						</svg>
						<div className={Style.About}>ABOUT</div>
					</div>
					<h2>I'm Dalton, a Software engineer with bla bla bla</h2>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
						Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui. Officia
						vitae accusantium pariatur ullam eum.
					</p>
				</section>

				<section className={top ? Style.CV : Style.CVScroll}>
					<h2>Education & Stuff</h2>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
						Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui. Officia
						vitae accusantium pariatur ullam eum.
					</p>
				</section>

				<div className={top ? Style.PhotoDiv : Style.PhotoDivScroll}>
					<img src={AboutMePic} alt='Dalton' />
				</div>
				{!top ? (
					<section className={Style.Links}>
						<LinksGrid />
					</section>
				) : (
					''
				)}
			</main>
			<ScrollArrowTopOnly />
			{/* <ScrollArrow /> */}
		</div>
	);
}
