import { React, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { goToIntro, goToWebDev, goToFitness, goToBottom } from '../../../scrollBreakpoints.js';

import { RiHome4Fill } from 'react-icons/ri';
import { BsCodeSlash } from 'react-icons/bs';
import { IoMdFitness } from 'react-icons/io';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RiMenu2Line } from 'react-icons/ri';
import { RiMenu4Fill } from 'react-icons/ri';
import { CgMenuRight } from 'react-icons/cg';
// import { HiBars3CenterLeft } from 'react-icons/hi';
// import { HiOutlineBars3CenterLeft } from 'react-icons/hi';

import Style from './navbar.module.scss';

export default function Navbar() {
	const currentHome = useRef();
	const currentWebDev = useRef();
	const currentFitness = useRef();
	const [top, setTop] = useState(true);

	const [menuHover, setMenuHover] = useState(false);
	const [menuClick, setMenuClick] = useState(false);
	const [mobileMenuClick, setMobileMenuClick] = useState(false);

	useEffect(() => {
		const handleScroll = (event) => {
			// -----> disable nav links at top of page (to not compete with initial auto scroll)
			if (window.pageYOffset >= 10) {
				setTop(false);
			} else if (window.pageYOffset < 10) {
				setTop(true);
			}
			// -----> manage gradient change of nav links
			const offset = window.pageYOffset;
			const height = window.outerHeight;

			let pageOnePercentOpen = 1;
			let pageTwoPercentOpen = 0;
			let pageThreePercentOpen = 0;

			if (offset > 1.5 * height) {
				// pageOnePercentOpen = 1 - ((offset - 1.5 * height) / 1.5) * height;
				pageOnePercentOpen = 1 - (offset - 1.5 * height) / height;
				pageTwoPercentOpen = (offset - 1.5 * height) / height;
			}
			if (offset > 2.5 * height) {
				pageTwoPercentOpen = 1 - (offset - 2.5 * height) / height;
				pageThreePercentOpen = (offset - 2.5 * height) / height;
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
			<div className={Style.Container}>
				<div className={menuClick ? Style.TopMenuActive : Style.Top}></div>
				<div className={menuClick ? Style.BottomMenuActive : Style.Bottom}></div>
				<div className={menuClick ? Style.LeftMenuActive : Style.Left}></div>
				<div className={menuClick ? Style.RightMenuActive : Style.Right}></div>
			</div>
			<header className={menuClick ? Style.HeaderMenuActive : Style.Header}>DALTON STEELE</header>
			<header className={top ? Style.HeaderMobile : Style.HeaderMobileScroll}>DALTON STEELE</header>
			<nav className={Style.Menu}>
				<div
					className={menuClick ? Style.IconMenuActive : Style.Icon}
					onMouseEnter={() => setMenuHover(true)}
					onMouseLeave={() => setMenuHover(false)}
					onClick={() => setMenuClick(!menuClick)}>
					<div className={Style.Bars}>
						<svg
							height='10px'
							width='50px'
							className={menuClick ? Style.Bar1X : menuHover ? Style.Bar1Hover : Style.Bar}>
							<line x1='28' y1='0' x2='50px' y2='0' className={Style.Line} />
						</svg>
						<svg
							height='10px'
							width='50px'
							className={menuClick ? Style.Bar2X : menuHover ? Style.Bar2Hover : Style.Bar}>
							<line x1='17' y1='0' x2='50px' y2='0' className={Style.Line} />
						</svg>
						<svg
							height='10px'
							width='50px'
							className={menuClick ? Style.Bar3X : menuHover ? Style.Bar3Hover : Style.Bar}>
							<line x1='28' y1='0' x2='50px' y2='0' className={Style.Line} />
						</svg>
					</div>
					<div className={menuClick ? Style.LettersMenuActive : Style.Letters}>
						<p className={menuHover ? Style.U : ''}>U</p>
						<p className={menuHover ? Style.N : ''}>N</p>
						<p className={menuHover ? Style.E : ''}>E</p>
						<p className={menuHover ? Style.M : ''}>M</p>
					</div>
				</div>
			</nav>
			<div className={menuClick ? Style.MenuBackgroundActive : Style.MenuBackground}></div>
			<nav className={Style.Mobile}>
				<RiMenu4Fill />
			</nav>
			<nav className={menuClick ? Style.NavMenuActive : Style.Nav}>
				<ul>
					<li className={Style.List} onClick={goToIntro}>
						<div className={Style.Icon}>
							<RiHome4Fill />
						</div>
						<div className={Style.IconCurrentHome} ref={currentHome}>
							<RiHome4Fill style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<li className={Style.List} onClick={goToWebDev}>
						<div className={Style.Icon}>
							<BsCodeSlash />
						</div>
						<div className={Style.IconCurrent} ref={currentWebDev}>
							<BsCodeSlash style={{ fill: 'url(#gradient)' }} />
						</div>
					</li>
					<li className={Style.List} onClick={goToFitness}>
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
