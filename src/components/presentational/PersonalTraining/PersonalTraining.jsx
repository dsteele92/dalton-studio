import { React, useState, useEffect, useRef } from 'react';

import Style from './personalTraining.module.scss';
import { useInWindow, ButtonAlt } from 'components';

export default function PersonalTraining(props) {
	const inWindow = useInWindow(props.offsetTop);

	return (
		<div className={Style.Fitness}>
			<h1 className={inWindow ? Style.TitleAppear : Style.Title}>
				<div className={Style.Health}>Health</div>
				<div className={Style.AndFit}>& Fitness</div>
			</h1>
			<div className={inWindow ? Style.TextAppear : Style.Text}>
				<h2>Personal Training Stuff</h2>
			</div>
			<div className={inWindow ? Style.ButtonsAppear : Style.Buttons}>
				<ButtonAlt text='Bio' />
				<ButtonAlt text='Testimonials' />
			</div>
		</div>
	);
}
