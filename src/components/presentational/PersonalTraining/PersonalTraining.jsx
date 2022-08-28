import { React, useState } from 'react';

import Style from './personalTraining.module.scss';

export default function PersonalTraining() {
	return (
		<div className={Style.PersonalTraining}>
			<div className={Style.Content}>
				<p>Personal Training</p>
			</div>
		</div>
	);
}
