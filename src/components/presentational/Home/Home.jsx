import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Style from './home.module.scss';
import { useIsIntersecting, Button } from 'components';
// import { goToIntro, goToWebDev, goToFitness, goToBottom, goToTop } from '../../../scrollBreakpoints.js';

import { BsArrowDown } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaRunning, FaLeaf } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import {
	DiReact,
	DiJsBadge,
	DiMongodb,
	DiFirebase,
	DiHtml5,
	DiCss3Full,
	DiGithubBadge,
	DiNpm,
	DiNodejsSmall,
	DiSass,
} from 'react-icons/di';

import codingImage from '../../../images/coding.jpg';

export default function Home() {
	const [top, setTop] = useState(true);
	const [bottom, setBottom] = useState(false);

	const left = useRef();
	const hello = useRef();
	const intro = useRef();
	const bannerCoding = useRef();
	const webDevInfo = useRef();
	const contact = useRef();
	const contactInfo = useRef();

	// -----> Lazy Loading functions
	const [titleWD, titleWDIntersecting] = useIsIntersecting({ threshold: 0.5 });
	// if (titleWDIntersecting) {
	// 	titleWDIntersecting.unobserve();
	// }
	const [textWD, textWDIntersecting] = useIsIntersecting({ threshold: 0.5 });
	const [buttonsWD, buttonsWDIntersecting] = useIsIntersecting({ threshold: 0.5 });
	const [webDev, webDevIntersecting] = useIsIntersecting({ threshold: 0 });
	const [titleHF, titleHFIntersecting] = useIsIntersecting({ threshold: 0.5 });
	// const [textHF, textHFIntersecting] = useIsIntersecting({ threshold: 0.5 });
	// const [buttonsHF, buttonsHFIntersecting] = useIsIntersecting({ threshold: 0.5 });
	const [fitness, fitnessIntersecting] = useIsIntersecting({ threshold: 0 });
	const [hiking, hikingIntersecting] = useIsIntersecting({ threshold: 0 });

	const scrollArrowClick = () => {
		// console.log(window.innerWidth / 2 + 200);
		// if (top) {
		// 	goToIntro();
		// } else if (window.pageYOffset < 2 * window.innerHeight) {
		// 	goToWebDev();
		// } else if (window.pageYOffset < document.documentElement.scrollHeight - window.outerHeight - 400) {
		// 	goToFitness();
		// } else {
		// 	goToBottom();
		// }
	};

	useEffect(() => {
		const handleScroll = (event) => {
			// -----> useful variables
			const windowHeight = window.innerHeight;
			const halfY = windowHeight / 2;
			const currentScroll = window.pageYOffset;
			console.log(currentScroll);

			// setOffsetY(window.pageYOffset);

			// -----> state for transitioning out of Hello page
			if (currentScroll >= 10) {
				setTop(false);
			} else if (currentScroll < 10) {
				setTop(true);
			}

			// -------> Left (blue) div is 200vh. At 1.2*windowHeight scroll the bottom of the div will be 20% up the page
			// ... just under the HELLO div. At this point we make the blue div go slightly slower than the scroll
			// ... (so that the main section will close in on the banner) AND make the HELLO div and intro div scroll up and leave the page
			if (currentScroll > 1.2 * windowHeight) {
				left.current.style.transform = `translateY(${(currentScroll - 1.2 * windowHeight) * 0.2}px)`;
				hello.current.style.top = `${halfY - (currentScroll - 1.2 * windowHeight) * 0.8}px`;
				intro.current.style.transform = `translateY(-${(currentScroll - 1.2 * windowHeight) * 0.6}px)`;
				intro.current.style.opacity = `${1 - (currentScroll - 1.2 * windowHeight) / windowHeight}`;
			}

			if (currentScroll > 1.5 * windowHeight) {
				webDevInfo.current.style.transform = `translateY(-${(currentScroll - 1.5 * windowHeight) / 2}px)`;
				// webDevInfo.current.style.transform = `translateY(-${currentScroll / 2}%)`;
			}

			if (hiking) {
				hiking.current.style.backgroundPositionY = `${
					(currentScroll - 3 * windowHeight) / 10 < 100 ? (currentScroll - 3 * windowHeight) / 10 : 100
				}%`;
			}

			// ---> drop contact info down
			// if (currentScroll > document.documentElement.scrollHeight - windowHeight - 400) {
			// 	console.log(`current scroll: ${currentScroll}`);
			// 	console.log(`document total: ${document.documentElement.scrollHeight - windowHeight}`);
			// 	contactInfo.current.style.transform = `translate(-50%, -${
			// 		(document.documentElement.scrollHeight - windowHeight - currentScroll) * 2
			// 	}px)`;
			// }

			//  -----> control state to know when at bottom of page
			if (currentScroll > document.documentElement.scrollHeight - windowHeight - 200) {
				setBottom(true);
			} else {
				setBottom(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={Style.Home}>
			<div className={Style.Right}></div>
			<div className={top ? Style.LeftTop : Style.LeftScroll} ref={left}></div>
			<div className={top ? Style.Hello : Style.HelloScroll} ref={hello}>
				<div className={Style.He}>HE</div>
				<div className={Style.Llo}>LLO.</div>
			</div>
			<div
				className={top ? Style.ScrollTop : bottom ? Style.ScrollBottom : Style.ScrollActive}
				onClick={scrollArrowClick}>
				<p>Scroll</p>
				<BsArrowDown className={Style.Arrow} />
			</div>
			<div className={top ? Style.Intro : Style.IntroAppear}>
				<div ref={intro}>
					<h2>Hi, I'm Dalton</h2>
					<h3>
						Software Engineer & Personal Trainer
						<br />
						based in Los Angeles, California
					</h3>
				</div>
			</div>
			<div className={Style.BannerCoding} ref={bannerCoding}></div>

			<main>
				<section className={Style.WebDev} ref={webDev}>
					<div className={Style.WebDevMain}>
						<div className={titleWDIntersecting ? Style.TitleAppear : Style.Title} ref={titleWD}>
							<div className={Style.Web}>WEB</div>
							<div className={Style.Dev}>DEV.</div>
						</div>
						<div className={textWDIntersecting ? Style.TextAppear : Style.Text} ref={textWD}>
							<h2>I am a Front-End Software Engineer with a passion for ... something</h2>
						</div>
						<div className={buttonsWDIntersecting ? Style.ButtonsAppear : Style.Buttons} ref={buttonsWD}>
							<Link to='/'>
								<Button text='About Me' />
							</Link>
							<Link to='/portfolio' className={Style.Portfolio}>
								<Button text='Portfolio' />
							</Link>
						</div>
					</div>
					<div className={Style.WebDevInfo} ref={webDevInfo}>
						<div className={Style.WebDevContainer}>
							<div className={Style.Icon}>
								<DiHtml5 />
								<p>HTML</p>
							</div>
							<div className={Style.Icon}>
								<DiCss3Full />
								<p>CSS</p>
							</div>
							<div className={Style.Icon}>
								<DiJsBadge />
								<p>Javascript</p>
							</div>
							<div className={Style.Icon}>
								<DiReact />
								<p>React</p>
							</div>
							<div className={Style.Icon}>
								<DiSass />
								<p>Sass</p>
							</div>
							<div className={Style.Icon}>
								<DiMongodb />
								<p>Mongo DB</p>
							</div>
							<div className={Style.Icon}>
								<DiGithubBadge />
								<p>GitHub</p>
							</div>
							<div className={Style.Icon}>
								<DiNodejsSmall />
								<p>NodeJS</p>
							</div>
							<div className={Style.Icon}>
								<DiNpm />
								<p>Node Project Manager</p>
							</div>
							{/* <div className={Style.Icon}>
								<DiFirebase />
								<p>Full Stack Web Apps</p>
							</div> */}
						</div>
					</div>
				</section>
				<section className={Style.Fitness} ref={fitness}>
					<div className={Style.FitnessMain}>
						<div className={titleHFIntersecting ? Style.TitleAppear : Style.Title} ref={titleHF}>
							<div className={Style.Health}>HEALTH</div>
							<div className={Style.Fit}>& FITNESS.</div>
						</div>
						{/* <div className={textHFIntersecting ? Style.TextAppear : Style.Text} ref={textHF}>
							<h2>I am a Front-End Software Engineer with a passion for ... something</h2>
						</div>
						<div className={buttonsHFIntersecting ? Style.ButtonsAppear : Style.Buttons} ref={buttonsHF}>
							<Link to='/'>
								<Button text='About Me' />
							</Link>
							<Link to='/portfolio' className={Style.Portfolio}>
								<Button text='Portfolio' />
							</Link>
						</div> */}
					</div>
					<div className={Style.FitnessPicture} ref={hiking}></div>
				</section>
			</main>

			{/* <section className={Style.WebDevContainer} ref={webDev}></section> */}
			{/* <div className={Style.BannerFitness} ref={bannerFitness}></div> */}
			{/* <section className={Style.FitnessContainer} ref={fitness}></section> */}
			<section className={Style.Contact} ref={contact}>
				<div className={Style.ContactInfo} ref={contactInfo}>
					<h2>Get in touch</h2>
					<div className={Style.ContactLinks}>
						<a href='mailto:dalton@steelebodyandmind.com'>
							<MdOutlineEmail />
						</a>
						<a
							href='https://www.linkedin.com/in/dalton-steele-239816132/'
							target='_blank'
							rel='noopener noreferrer'>
							<FaLinkedin />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
