import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navbarData } from '../../../data/NavbarData';

import { FaBars } from 'react-icons/fa';
import { BiHomeSmile } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';
import { IoIosFitness } from 'react-icons/io';
import { RiCamera3Line } from 'react-icons/ri';

import Style from './navbar.module.scss';

export default function Navbar() {
	// const [yScroll, setYScroll] = useState(0);
	const currentHome = useRef();
	const currentWebDev = useRef();
	const currentFitness = useRef();
	const currentModeling = useRef();
	// const [popOutNav, setPopOutNav] = useState('initial');
	// const [popOutNavMobile, setPopOutNavMobile] = useState('initial');

	useEffect(() => {
		const handleScroll = (event) => {
			console.log(window.pageYOffset);
			const offset = window.pageYOffset;
			const height = window.outerHeight;
			const pageOnePercentOpen = 1 - offset / height;
			let pageTwoPercentOpen = 0;
			let pageThreePercentOpen = 0;
			let pageFourPercentOpen = 0;
			if (offset <= height) {
				pageTwoPercentOpen = offset / height;
			}
			if (offset > height && offset <= 2 * height) {
				pageTwoPercentOpen = 1 - (offset - height) / height;
				pageThreePercentOpen = (offset - height) / height;
			}
			if (offset > 2 * height) {
				pageThreePercentOpen = 1 - (offset - 2 * height) / height;
				pageFourPercentOpen = (offset - 2 * height) / height;
			}
			currentHome.current.style.opacity = `${pageOnePercentOpen}`;
			currentWebDev.current.style.opacity = `${pageTwoPercentOpen}`;
			currentFitness.current.style.opacity = `${pageThreePercentOpen}`;
			currentModeling.current.style.opacity = `${pageFourPercentOpen}`;
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// const handlePopOutNav = function () {
	// 	console.log(popOutNav);
	// 	if (popOutNav === 'open') {
	// 		setPopOutNav('closed');
	// 	} else {
	// 		setPopOutNav('open');
	// 	}
	// };
	// const handlePopOutNavMobile = function () {
	// 	console.log(popOutNavMobile);
	// 	if (popOutNavMobile === 'open') {
	// 		setPopOutNavMobile('closed');
	// 	} else {
	// 		setPopOutNavMobile('open');
	// 	}
	// };

	return (
		<div>
			<nav className={Style.Nav}>
				<ul>
					<li>
						<div className={Style.Icon}>
							<BiHomeSmile />
						</div>
						<div className={Style.IconCurrentHome} ref={currentHome}>
							<BiHomeSmile style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<li>
						<div className={Style.Icon}>
							<HiCode />
						</div>
						<div className={Style.IconCurrent} ref={currentWebDev}>
							<HiCode style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<li>
						<div className={Style.Icon}>
							<IoIosFitness />
						</div>
						<div className={Style.IconCurrent} ref={currentFitness}>
							<IoIosFitness style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<li>
						<div className={Style.Icon}>
							<RiCamera3Line />
						</div>
						<div className={Style.IconCurrent} ref={currentModeling}>
							<RiCamera3Line style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<svg width='0' height='0'>
						<linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
							<stop stopColor='#e66465' offset='0%' />
							<stop stopColor='#9198e5' offset='100%' />
						</linearGradient>
					</svg>
				</ul>
			</nav>
		</div>
	);
}
