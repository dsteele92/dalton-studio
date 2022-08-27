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
	const [yScroll, setYScroll] = useState(0);
	// const [popOutNav, setPopOutNav] = useState('initial');
	// const [popOutNavMobile, setPopOutNavMobile] = useState('initial');

	useEffect(() => {
		const handleScroll = (event) => {
			console.log(window.scrollY);
			// setYScroll(window.scrollY);
			// if (window.scrollY === 0) {
			// 	setPopOutNav('initial');
			// }
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
				<div className={Style.Inner}>
					<ul>
						<li className={Style.Home}>
							<BiHomeSmile />
						</li>
						<li className={Style.Home}>
							<HiCode />
						</li>
						<li className={Style.Home}>
							<IoIosFitness />
						</li>
						<li className={Style.Home}>
							<RiCamera3Line />
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
