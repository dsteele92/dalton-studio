import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Style from './linksGrid.module.scss';
import { RiHome4Fill } from 'react-icons/ri';
import { BsCodeSlash } from 'react-icons/bs';
import { IoMdFitness } from 'react-icons/io';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export default function LinksGrid() {
	let location = useLocation();
	return (
		<div className={Style.LinksGrid}>
			<div className={location.pathname === '/about' ? Style.Hide : Style.About}>
				<h2>ABOUT</h2>
			</div>
			<div className={location.pathname === '/portfolio' ? Style.Hide : Style.Coding}>
				<BsCodeSlash className={Style.Icon} />
				<h2>CODING</h2>
			</div>
			<div className={location.pathname === '/fitness' ? Style.Hide : Style.Fitness}>
				<IoMdFitness className={Style.Icon} />
				<h2>FITNESS</h2>
			</div>
			<div className={location.pathname === '/contact' ? Style.Hide : Style.Contact}>
				<MdOutlineAlternateEmail className={Style.Icon} />
				<h2>CONTACT</h2>
			</div>
			<div className={location.pathname === '/' ? Style.Hide : Style.Home}>
				<RiHome4Fill className={Style.Icon} />
				<h2>HOME</h2>
			</div>
		</div>
	);
}
