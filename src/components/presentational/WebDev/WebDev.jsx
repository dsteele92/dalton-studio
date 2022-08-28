import { React, useState } from 'react';

import Style from './webDev.module.scss';

export default function WebDev() {
	return (
		<div className={Style.WebDev}>
			<div className={Style.Content}>
				<p>WebDev</p>
			</div>
		</div>
	);
}
