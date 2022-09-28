import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Style from './home.module.scss';
import { useIsIntersecting, useHasIntersected, Button, ButtonAlt } from 'components';
import { goToIntro, goToWebDev, goToFitness, goToBottom, goToTop } from '../../../scrollBreakpoints.js';

import { BsArrowDown } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaRunning, FaLeaf } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import { SiPostman, SiExpress } from 'react-icons/si';
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
	const fitness = useRef();
	const hiking = useRef();
	const contact = useRef();
	const contactInfo = useRef();
	const mainLine = useRef();

	// -----> Lazy Loading functions
	const [titleWD, titleWDIntersected] = useHasIntersected({ threshold: 0.5 });
	const [textWD, textWDIntersected] = useHasIntersected({ threshold: 0.5 });
	const [buttonsWD, buttonsWDIntersected] = useHasIntersected({ threshold: 0.5 });
	const [webDev, webDevIntersected] = useHasIntersected({ threshold: 0 });

	const [titleHF, titleHFIntersected] = useHasIntersected({ threshold: 0.5 });
	const [textHF, textHFIntersected] = useHasIntersected({ threshold: 0.5 });
	const [buttonsHF, buttonsHFIntersected] = useHasIntersected({ threshold: 0.5 });

	// const [hiking, hikingIntersecting] = useIsIntersecting({ threshold: 0 });
	// const [contact, contactIntersecting] = useIsIntersecting({ threshold: 0 });

	const scrollArrowClick = () => {
		if (top) {
			goToIntro();
		} else if (window.pageYOffset < 2.5 * window.innerHeight) {
			goToWebDev();
		} else if (window.pageYOffset < 3.5 * window.innerHeight) {
			goToFitness();
		} else {
			goToBottom();
		}
	};

	useEffect(() => {
		const handleScroll = (event) => {
			// -----> useful variables
			const windowHeight = window.innerHeight;
			const halfY = windowHeight / 2;
			const currentScroll = window.pageYOffset;
			// console.log(currentScroll);

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
				hello.current.style.top = `${
					currentScroll - 1.2 * windowHeight > 0 ? halfY - (currentScroll - 1.2 * windowHeight) * 0.8 : halfY
				}px`;
				intro.current.style.transform = `translateY(-${(currentScroll - 1.2 * windowHeight) * 0.6}px)`;
				intro.current.style.opacity = `${1 - (currentScroll - 1.2 * windowHeight) / windowHeight}`;
			}

			if (currentScroll > 1.5 * windowHeight) {
				webDevInfo.current.style.transform = `translateY(-${(currentScroll - 1.5 * windowHeight) / 2}px)`;
			}

			if (currentScroll > 2.5 * windowHeight) {
				hiking.current.style.backgroundPositionY = `${
					currentScroll - 3 * windowHeight < 0
						? 0
						: (currentScroll - 3 * windowHeight) / 10 < 100
						? (currentScroll - 3 * windowHeight) / 10
						: 100
				}%`;
			}

			if (currentScroll > 3.5 * windowHeight) {
				bannerCoding.current.style.display = 'none';
			} else {
				bannerCoding.current.style.display = 'block';
			}

			if (currentScroll > document.documentElement.scrollHeight - 1.5 * windowHeight) {
				// console.log(document.documentElement.scrollHeight - windowHeight - currentScroll);
				contactInfo.current.style.top = `${
					67 - (document.documentElement.scrollHeight - windowHeight - currentScroll) / 6
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
	}, [hiking]);

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
					<svg height='18' width='300'>
						<polyline
							className={top ? Style.IntroIcon : Style.IntroIconAppear}
							points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
						/>
					</svg>
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
						<div className={titleWDIntersected ? Style.TitleAppear : Style.Title} ref={titleWD}>
							<svg height='20' width='120'>
								<polyline
									className={titleWDIntersected ? Style.WDIconAppear : Style.WDIcon}
									points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
								/>
							</svg>
							<div className={Style.Web}>WEB</div>
							<div className={Style.Dev}>DEV.</div>
						</div>
						<div className={textWDIntersected ? Style.TextAppear : Style.Text} ref={textWD}>
							<h2>I am a Front-End Software Engineer with a passion for ... something</h2>
						</div>
						<div className={textWDIntersected ? Style.ButtonsAppear : Style.Buttons} ref={buttonsWD}>
							<Link to='/'>
								<Button text='About Me' />
							</Link>
							<Link to='/portfolio' className={Style.Portfolio}>
								<Button text='Portfolio' />
							</Link>
						</div>
					</div>
					<div className={Style.WebDevInfoMobile}>
						<div className={Style.WebDevContainerMobile}>
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
								<DiGithubBadge />
								<p>GitHub</p>
							</div>
							<div className={Style.Icon}>
								<DiNodejsSmall />
								<p>NodeJS</p>
							</div>
							<div className={Style.Icon}>
								<DiNpm />
								<p>NPM</p>
							</div>
							<div className={Style.Icon}>
								<SiPostman />
								<p>Postman</p>
							</div>
							<div className={Style.Icon}>
								<DiMongodb />
								<p>Mongo DB</p>
							</div>
							<div className={Style.Icon}>
								<SiExpress />
								<p>Express</p>
							</div>
							<div className={Style.Icon}>
								<DiFirebase />
								<p>Full Stack Web Apps</p>
							</div>
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
								<DiGithubBadge />
								<p>GitHub</p>
							</div>
							<div className={Style.Icon}>
								<DiNodejsSmall />
								<p>NodeJS</p>
							</div>
							<div className={Style.Icon}>
								<DiNpm />
								<p>NPM</p>
							</div>
							<div className={Style.Icon}>
								<SiPostman />
								<p>Postman</p>
							</div>
							<div className={Style.Icon}>
								<DiMongodb />
								<p>Mongo DB</p>
							</div>
							<div className={Style.Icon}>
								<SiExpress />
								<p>Express</p>
							</div>
							<div className={Style.Icon}>
								<DiFirebase />
								<p>Full Stack Web Apps</p>
							</div>
						</div>
					</div>
				</section>
				<section className={Style.Fitness} ref={fitness}>
					<div className={titleHFIntersected ? Style.TitleAppear : Style.Title} ref={titleHF}>
						<svg height='20' width='120'>
							<polyline
								className={titleHFIntersected ? Style.HFIconAppear : Style.HFIcon}
								points='10,10 30,30 50,10 70,30 90,10 110,30 130,10 150,30 170,10 190,30 210,10'
							/>
						</svg>
						<div className={Style.Health}>HEALTH</div>
						<div className={Style.Fit}>& FITNESS.</div>
					</div>
					<div className={Style.FitnessInfo}>
						<div className={textHFIntersected ? Style.TextAppear : Style.Text} ref={textHF}>
							<div className={Style.HFIcons}>
								<FaRunning />
								<FaLeaf />
								<GiMeditation />
							</div>
							<h2>
								Utilizing fitness training, nutrition coaching, and mindfulness meditation, I work
								one-on-one with clients to make lasting commitments to their health.{' '}
							</h2>
						</div>
						<div className={textHFIntersected ? Style.ButtonsAppear : Style.Buttons} ref={buttonsHF}>
							<Link to='/'>
								<Button text='Learn More' />
							</Link>
						</div>
					</div>
					<div className={Style.FitnessPicture} ref={hiking}></div>
					<div className={Style.FitnessPictureMobile}></div>
				</section>
			</main>
			<section className={Style.Contact} ref={contact}>
				<div className={Style.ContactInfo} ref={contactInfo}>
					<div className={Style.GetInTouch}>
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
					{/* add form here */}
				</div>
			</section>
			<section className={Style.ContactMobile}>
				<div className={Style.ContactInfo}>
					<div className={Style.GetInTouch}>
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
					{/* add form here */}
				</div>
			</section>
		</div>
	);
}
