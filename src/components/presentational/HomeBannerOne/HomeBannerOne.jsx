import { React, useState } from 'react';

import Style from './homeBannerOne.module.scss';

export default function HomeBannerOne() {
	return (
		<div className={Style.HomeBannerOne}>
			<div className={Style.Content}>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque doloremque, id explicabo eum
					reprehenderit officiis facere assumenda laudantium, hic optio ad molestias iste accusamus unde saepe
					impedit voluptas repellat? Saepe!
				</p>
			</div>
		</div>
	);
}
