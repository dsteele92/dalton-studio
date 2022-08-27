import { React, useState, useEffect, useRef } from 'react';
import Style from './homeTop.module.scss';

import BackgroundPic from '../../../images/background-pic.jpeg';

export default function HomeTop() {
	return (
		<div className={Style.Top}>
			<img className={Style.BackgroundPic} src={BackgroundPic} alt='Dalton walking' />
			<div className={Style.Underlay}>
				<div className={Style.Content}>
					<p className={Style.Hi}>Hi, I'm</p>
					<h1>Dalton Steele</h1>
					<ul className={Style.Titles}>
						<li>Software Engineer</li>
						<li>/</li>
						<li>Personal Trainer</li>
					</ul>
					<h4 className={Style.Location}>Los Angeles, CA</h4>
				</div>
			</div>
		</div>
	);
}
