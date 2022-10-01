import { React, useState, useEffect, useRef } from 'react';

import Style from './personalTraining.module.scss';
import { LinksGrid, ScrollArrowTopOnly, LoadingBounce } from 'components';
import RunningPic from '../../../images/run_compressed.jpeg';

export default function PersonalTraining() {
	const [top, setTop] = useState(true);
	const [loaded, setLoaded] = useState(false);

	const pic1 = useRef();

	useEffect(() => {
		window.scrollTo(0, 0);

		// const handleLoad = (event) => {
		setTimeout(() => {
			setLoaded(true);
		}, '1000');
		// };

		const handleScroll = (event) => {
			// -----> state for transitioning out of top
			if (window.pageYOffset >= 10) {
				setTop(false);
			} else if (window.pageYOffset < 10) {
				setTop(true);
			}
		};

		// pic1.current.addEventListener('load', handleLoad);
		window.addEventListener('scroll', handleScroll);

		return () => {
			// window.removeEventListener('load', handleLoad);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={!loaded ? Style.FitnessPageLoading : Style.FitnessPage}>
			<div className={Style.Top}></div>
			<div className={!loaded ? Style.Bottom : top ? Style.BottomTop : Style.BottomScroll}></div>
			<div className={!loaded ? Style.LoadingPage : Style.LoadingPageHide}>
				<LoadingBounce />
			</div>
			<main className={loaded ? Style.Main : Style.MainLoading}>
				<section className={Style.Fitness}>
					<div className={Style.Title}>
						<svg height='20' width='120'>
							<polyline
								className={Style.WDIcon}
								points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
							/>
						</svg>
						<div className={Style.Header}>HEALTH & FITNESS</div>
					</div>
					<div className={Style.Intro}>
						<h2>I'm Dalton, a Software engineer with bla bla bla</h2>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod accusamus quae repudiandae!
							Cumque recusandae enim nostrum dolor voluptates reiciendis non fugit fugiat harum qui.
							Officia vitae accusantium pariatur ullam eum.
						</p>
					</div>
				</section>

				<div className={Style.Running}>
					<img src={RunningPic} alt='running' />
				</div>

				{/* <section className={Style.Links}>
					<LinksGrid color='#707070' />
				</section> */}
				<section className={Style.Testimonials}>
					<div>the homies</div>
				</section>

				<ScrollArrowTopOnly color='black' />
			</main>
		</div>
	);
}
