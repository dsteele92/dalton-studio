import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Style from './about.module.scss';

import AboutMePic from '../../../images/about-me-pic.jpeg';

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
				<div className={Style.AboutMe}>
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
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
						Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui. Officia
						vitae accusantium pariatur ullam eum.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
						Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui. Officia
						vitae accusantium pariatur ullam eum.
					</p>
				</div>
				<div className={Style.PhotoDiv}>
					<img src={AboutMePic} alt='Dalton' />
				</div>
			</main>
		</div>
	);
}
