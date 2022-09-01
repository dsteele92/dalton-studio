import { React, useState, useEffect, useRef } from 'react';
import Style from './homeTop.module.scss';

// import BackgroundPic from '../../../images/background-pic.jpeg';
import AboutMePic from '../../../images/cropped-about-me.png';

import { BsArrowDown } from 'react-icons/bs';

export default function HomeTop() {
	const [top, setTop] = useState(true);
	const left = useRef();
	const hello = useRef();
	const intro = useRef();
	const aboutMe = useRef();
	const bannerCoding = useRef();
	const webDev = useRef();

	useEffect(() => {
		let lastScroll = 0;
		let directionDown;

		const handleScroll = (event) => {
			const windowHeight = window.outerHeight;
			//-----> first find direction of scroll
			const currentScroll = window.pageYOffset;
			if (currentScroll > 200 && directionDown) {
				if (top) {
					setTop(false);
				}
			} else if (currentScroll < 200 && !directionDown) {
				if (!top) {
					setTop(true);
				}
			}
			console.log(currentScroll);
			if (currentScroll > lastScroll) {
				directionDown = true;
				lastScroll = currentScroll;
			} else if (currentScroll < lastScroll) {
				directionDown = false;
				lastScroll = currentScroll;
			}
			//----->if scrolling down from top of page
			// if (directionDown && currentScroll < windowHeight) {
			// 	window.scrollTo({
			// 		top: windowHeight,
			// 		left: 0,
			// 		behavior: 'smooth',
			// 	});
			// }
			// } else if (!directionDown && currentScroll < 20) {
			// 	if (initialScroll) {
			// 		setInitialScroll(false);
			// window.scrollTo({
			// 	top: 0,
			// 	left: 0,
			// 	behavior: 'smooth',
			// });
			// }
			// }
			// -----> control x-axis position of HELLO div
			const halfX = window.innerWidth / 2;
			const halfY = window.innerHeight / 2;

			console.log(currentScroll);
			if (currentScroll <= halfX - 50) {
				left.current.style.minWidth = `${halfX + currentScroll * 1.5}px`;
				hello.current.style.left = `${halfX + currentScroll}px`;
				hello.current.style.top = `${halfY}px`;
			}

			if (currentScroll > windowHeight * 0.5) {
				aboutMe.current.style.top = `${1.3 * windowHeight - (currentScroll - windowHeight) / 100}`;
				intro.current.style.top = `${1.5 * windowHeight - (currentScroll - windowHeight) / 2}px`;
				bannerCoding.current.style.top = `${2.2 * windowHeight - (currentScroll - windowHeight)}px`;
				webDev.current.style.top = `${3 * windowHeight - (currentScroll - windowHeight) * 2}px`;
			}

			if (currentScroll > windowHeight + 100) {
				hello.current.style.top = `${halfY - currentScroll + windowHeight + 100}px`;
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [top]);

	return (
		<div className={Style.Home}>
			<div className={Style.Left} ref={left}></div>
			<div className={Style.Right}></div>
			<section className={Style.Top}>
				<div className={Style.Hello} ref={hello}>
					<div className={Style.He}>HE</div>
					<div className={Style.Llo}>LLO.</div>
				</div>
				<div className={!top ? Style.ScrollActive : Style.Scroll}>
					<p>Scroll</p>
					<BsArrowDown className={Style.Arrow} />
				</div>
			</section>
			<img className={Style.AboutMePic} ref={aboutMe} src={AboutMePic} alt='Dalton stadning' />
			<section className={Style.Intro} ref={intro}>
				<div>
					<h2>Hi, I'm Dalton</h2>
					<h3>Software Engineer, Personal Trainer, & Fitness Model.</h3>
				</div>
			</section>
			<div className={Style.BannerCoding} ref={bannerCoding}></div>
			<section className={Style.WebDev} ref={webDev}></section>

			{/* <section className={Style.Intro}>
				<div className={Style.Content}>
					<p className={Style.Hi}>Hi, I'm</p>
					<h1>Dalton Steele</h1>
					<ul className={Style.Titles}>
						<li>Software Engineer</li>
						<li>/</li>
						<li>Personal Trainer</li>
					</ul>
					<h4 className={Style.Location}>Los Angeles, CA</h4>
				</div>
			</section> */}
		</div>
	);
}
