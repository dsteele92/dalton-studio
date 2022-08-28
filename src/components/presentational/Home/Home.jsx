import { React } from 'react';
import Style from './home.module.scss';
import { HomeTop, WebDev, PersonalTraining, Modeling } from 'components';

export default function Home() {
	return (
		<div className={Style.Home}>
			<HomeTop />
			<WebDev />
			<PersonalTraining />
			<Modeling />
		</div>
	);
}
