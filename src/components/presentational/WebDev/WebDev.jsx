import { React, useState, useEffect, useRef } from 'react';
import Style from './webDev.module.scss';
import { Button, useInWindow } from 'components';

export default function WebDev(props) {
	const inWindow = useInWindow(props.offsetTop);

	return (
		<div className={Style.WebDev}>
			<h1 className={inWindow ? Style.TitleAppear : Style.Title}>
				<div className={Style.Web}>WEB</div>
				<div className={Style.Dev}>DEV</div>
			</h1>
			<div className={inWindow ? Style.TextAppear : Style.Text}>
				<h2>I am a Front-End Software Engineer with a passion for ... something</h2>
			</div>
			{/* <div className={Style.Image}></div> */}
			<div className={inWindow ? Style.ButtonsAppear : Style.Buttons}>
				<Button text='About Me' />
				<Button text='Portfolio' />
			</div>
		</div>
	);
}
