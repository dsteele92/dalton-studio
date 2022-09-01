import { React } from 'react';

import Style from './pageContainer.module.scss';

export default function Navbar() {
	return (
		<div className={Style.Container}>
			<div className={Style.Top}></div>
			<div className={Style.Bottom}></div>
			<div className={Style.Left}></div>
			<div className={Style.Right}></div>
		</div>
	);
}
