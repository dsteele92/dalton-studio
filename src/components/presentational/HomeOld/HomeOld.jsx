import { React, useState, useEffect, useRef } from 'react';
import Style from './homeOld.module.scss';

import { Link } from 'react-router-dom';
import { HomeTop, WebDev, PersonalTraining } from 'components';
import { goToIntro, goToWebDev, goToFitness, goToBottom, goToTop } from '../../../scrollBreakpoints.js';

import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaRunning, FaLeaf } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { TiChevronRightOutline } from 'react-icons/ti';
import { GiMeditation } from 'react-icons/gi';
import { DiReact, DiJsBadge, DiMongodb, DiFirebase } from 'react-icons/di';

export default function Home() {
	const [top, setTop] = useState(true);
	const [topPage, setTopPage] = useState(true);
	const [bottom, setBottom] = useState(false);
	const [showIntro, setShowIntro] = useState(false);

	const left = useRef();
	const hello = useRef();
	const intro = useRef();
	const layerOne = useRef();
	const bannerCoding = useRef();
	const webDev = useRef();
	const webDevInfo = useRef();
	const bannerFitness = useRef();
	const fitness = useRef();
	const fitnessInfo = useRef();
	const contact = useRef();
	const contactInfo = useRef();

	const scrollArrowClick = () => {
		console.log(window.innerWidth / 2 + 200);
		if (top) {
			goToIntro();
		} else if (window.pageYOffset < 2 * window.innerHeight) {
			goToWebDev();
		} else if (window.pageYOffset < document.documentElement.scrollHeight - window.outerHeight - 400) {
			goToFitness();
		} else {
			goToBottom();
		}
	};

	useEffect(() => {
		let directionDown;
		let lastScroll = 0;

		const handleScroll = (event) => {
			// -----> useful variables
			const windowHeight = window.innerHeight;
			const currentScroll = window.pageYOffset;
			const halfX = window.innerWidth / 2;
			const halfY = window.innerHeight / 2;

			console.log(currentScroll);

			// -----> use setTop for adjusting class of down arrow
			if (currentScroll >= 100) {
				setTop(false);
			} else if (currentScroll < 100) {
				setTop(true);
			}
			// -----> For auto scroll of first section:
			if (currentScroll >= window.innerHeight) {
				setTopPage(false);
			} else {
				setTopPage(true);
			}

			//---> first find direction of scroll
			if (currentScroll > lastScroll) {
				directionDown = true;
				lastScroll = currentScroll;
			} else if (currentScroll < lastScroll) {
				directionDown = false;
				lastScroll = currentScroll;
			}

			if (topPage && directionDown) {
				setTimeout(() => {
					goToIntro();
				}, 500);
			}
			if (topPage && !directionDown) {
				setTimeout(() => {
					goToTop();
				}, 500);
			}

			// -----> control position of HELLO div
			if (currentScroll <= halfX - 50) {
				left.current.style.minWidth = `${
					halfX + currentScroll * 1.5 < window.innerWidth ? halfX + currentScroll * 1.5 : window.innerWidth
				}px`;
				hello.current.style.left = `${halfX + currentScroll}px`;
				hello.current.style.top = `${halfY}px`;
			}
			// ---> have it scroll up after a delay
			if (currentScroll > windowHeight + 100) {
				hello.current.style.top = `${halfY - currentScroll + windowHeight + 100}px`;
			}

			// -----> manage state for intro div AND parallax effect on layerOne (next sections)
			if (currentScroll >= halfX && currentScroll < 2 * windowHeight) {
				setShowIntro(true);
				layerOne.current.style.top = `${2.7 * windowHeight - (currentScroll - halfX) / 2}px`;
			} else {
				setShowIntro(false);
			}

			if (currentScroll > windowHeight) {
				webDevInfo.current.style.top = `${600 - (currentScroll - halfX) / 3}px`;
			}
			// ---> have it scroll up after a delay
			if (currentScroll > halfX + 400) {
				intro.current.style.transform = `translateY(-${(currentScroll - halfX - 400) / 2}px)`;
			}

			// -----> Raise fitness section (and contact) up over fitness banner
			if (currentScroll > 2 * windowHeight) {
				fitness.current.style.top = `${3.3 * windowHeight - (currentScroll - windowHeight)}px`;
				fitnessInfo.current.style.top = `${600 - (currentScroll - 2.5 * windowHeight) / 2}px`;
				contact.current.style.top = `${4.3 * windowHeight - (currentScroll - windowHeight)}px`;
			}
			// ---> drop contact info down
			if (currentScroll > document.documentElement.scrollHeight - windowHeight - 400) {
				console.log(`current scroll: ${currentScroll}`);
				console.log(`document total: ${document.documentElement.scrollHeight - windowHeight}`);
				contactInfo.current.style.transform = `translate(-50%, -${
					(document.documentElement.scrollHeight - windowHeight - currentScroll) * 2
				}px)`;
			}

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
	}, [topPage]);

	return (
		<div className={Style.Home}>
			<div className={Style.Left} ref={left}></div>
			<div className={Style.Right}></div>
			<section className={Style.Top}>
				<div className={Style.Hello} ref={hello}>
					<div className={Style.He}>HE</div>
					<div className={Style.Llo}>LLO.</div>
				</div>

				<div
					className={top ? Style.ScrollTop : bottom ? Style.ScrollBottom : Style.ScrollActive}
					onClick={scrollArrowClick}>
					<p>Scroll</p>
					<BsArrowDown className={Style.Arrow} />
				</div>
			</section>

			<div className={showIntro ? Style.IntroAppear : Style.Intro}>
				<div ref={intro}>
					<h2>Hi, I'm Dalton</h2>
					<h3>Software Engineer & Personal Trainer</h3>
				</div>
			</div>

			<div className={Style.BannerCoding} ref={bannerCoding}></div>
			<div className={Style.LayerOne} ref={layerOne}>
				<section className={Style.WebDevContainer} ref={webDev}>
					<WebDev offsetTop={window.innerHeight * 1.7} />
					<div className={Style.WebDevInfo} ref={webDevInfo}>
						<div className={Style.RowOne}>
							<div className={Style.WebDevOne}>
								<DiReact />
								<p>React</p>
							</div>
							<div className={Style.WebDevOne}>
								<DiMongodb />
								<p>Mongo DB w/ Express</p>
							</div>
						</div>
						<div className={Style.RowTwo}>
							<div className={Style.WebDevThree}>
								<DiJsBadge />
								<p>Javascript</p>
							</div>
							<div className={Style.WebDevFour}>
								<DiFirebase />
								<p>Full Stack Web Apps</p>
							</div>
						</div>
					</div>
				</section>
				<div className={Style.BannerFitness} ref={bannerFitness}></div>
				<section className={Style.FitnessContainer} ref={fitness}>
					<PersonalTraining offsetTop={window.innerHeight * 3} />
					<div className={Style.FitnessInfo} ref={fitnessInfo}>
						<div className={Style.RowOne}>
							<div className={Style.FitnessOne}>
								<FaRunning />
								<p>Movement</p>
							</div>
							<div className={Style.FitnessTwo}>
								<FaLeaf />
								<p>Nutrition</p>
							</div>
							<div className={Style.FitnessThree}>
								<GiMeditation />
								<p>Mindfulness</p>
							</div>
						</div>
					</div>
				</section>
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
		</div>
	);
}
