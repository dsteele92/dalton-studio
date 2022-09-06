import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../../data/NavbarData';

import { FaBars } from 'react-icons/fa';
import { BiHomeSmile } from 'react-icons/bi';
import { RiHome4Fill } from 'react-icons/ri';
import { HiCode } from 'react-icons/hi';
import { BsCodeSlash } from 'react-icons/bs';
import { IoIosFitness } from 'react-icons/io';
import { IoMdFitness } from 'react-icons/io';
import { CgGym } from 'react-icons/cg';
import { RiCamera3Line } from 'react-icons/ri';
import { BsCamera2 } from 'react-icons/bs';

import Style from './navbar.module.scss';

export default function Navbar() {
	// const [yScroll, setYScroll] = useState(0);
	const currentHome = useRef();
	const currentWebDev = useRef();
	const currentFitness = useRef();
	const currentModeling = useRef();
	// const [popOutNav, setPopOutNav] = useState('initial');
	// const [popOutNavMobile, setPopOutNavMobile] = useState('initial');

	const goToIntro = () => {
		if (window.pageYOffset >= 100) {
			window.scrollTo({
				top: window.innerWidth / 2 + 200,
				behavior: 'smooth',
			});
		}
	};
	const goToWebDev = () => {
		if (window.pageYOffset >= 100) {
			window.scrollTo({
				top: window.innerHeight * 2 + 170,
				behavior: 'smooth',
			});
		}
	};
	const goToFitness = () => {
		if (window.pageYOffset >= 100) {
			window.scrollTo({
				top: window.innerHeight * 3 + 250,
				behavior: 'smooth',
			});
		}
	};
	const goToTop = () => {
		if (window.pageYOffset >= 100) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	useEffect(() => {
		const handleScroll = (event) => {
			// console.log(window.pageYOffset);
			const offset = window.pageYOffset;
			const height = window.outerHeight;
			// logic for static page:
			// const pageOnePercentOpen = 1 - offset / height;
			// let pageTwoPercentOpen = 0;
			// let pageThreePercentOpen = 0;
			// if (offset <= height) {
			// 	pageTwoPercentOpen = offset / height;
			// }
			// if (offset > height && offset <= 2 * height) {
			// 	pageTwoPercentOpen = 1 - (offset - height) / height;
			// 	pageThreePercentOpen = (offset - height) / height;
			// }
			// if (offset > 2 * height) {
			// 	pageThreePercentOpen = 1 - (offset - 2 * height) / height;
			// }

			let pageOnePercentOpen = 1;
			let pageTwoPercentOpen = 0;
			let pageThreePercentOpen = 0;

			if (offset > 1.2 * height) {
				pageOnePercentOpen = 1 - ((offset - 1.2 * height) / 1.2) * height;
				pageTwoPercentOpen = ((offset - 1.2 * height) / 1.2) * height;
			}
			if (offset > 2.5 * height) {
				pageTwoPercentOpen = 1 - ((offset - 2.5 * height) / 2.5) * height;
				pageThreePercentOpen = ((offset - 2.5 * height) / 2.5) * height;
			}

			currentHome.current.style.opacity = `${pageOnePercentOpen}`;
			currentWebDev.current.style.opacity = `${pageTwoPercentOpen}`;
			currentFitness.current.style.opacity = `${pageThreePercentOpen}`;
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<header>DALTON STEELE</header>
			<nav className={Style.Nav}>
				<ul>
					<li onClick={goToTop}>
						<div className={Style.Icon}>
							<RiHome4Fill />
						</div>
						<div className={Style.IconCurrentHome} ref={currentHome}>
							<RiHome4Fill style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<li onClick={goToWebDev}>
						<div className={Style.Icon}>
							<BsCodeSlash />
						</div>
						<div className={Style.IconCurrent} ref={currentWebDev}>
							<BsCodeSlash style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<li onClick={goToFitness}>
						<div className={Style.Icon}>
							<IoMdFitness />
						</div>
						<div className={Style.IconCurrent} ref={currentFitness}>
							<IoMdFitness style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<svg width='0' height='0'>
						<linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
							<stop stopColor='#da4141' offset='0%' />
							<stop stopColor='#9198e5' offset='100%' />
						</linearGradient>
					</svg>
				</ul>
			</nav>
		</div>
	);
}
