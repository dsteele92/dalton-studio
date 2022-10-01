import { React, useState, useEffect } from 'react';
import Style from './scrollArrowTopAndBottom.module.scss';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

export default function ScrollArrowTopAndBottom() {
	const [top, setTop] = useState(true);

	useEffect(() => {
		const handleScroll = (event) => {
			// -----> state for transitioning out of top
			if (window.pageYOffset >= 10) {
				setTop(false);
			} else if (window.pageYOffset < 10) {
				setTop(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={top ? Style.ScrollTop : Style.ScrollBottom}>
			<p className={Style.Scroll}>Scroll</p>
			<p className={Style.BackToTop}>Back to top</p>
			<BsArrowDown className={Style.ArrowDown} />
			<BsArrowUp className={Style.ArrowUp} />
		</div>
	);
}
