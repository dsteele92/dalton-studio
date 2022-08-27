import { React } from 'react';
import Style from './home.module.scss';
import { HomeTop, HomeBannerOne } from 'components';

export default function Home() {
	return (
		<div className={Style.Home}>
			<HomeTop />
			<HomeBannerOne />
		</div>
	);
}
