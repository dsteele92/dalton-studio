import { React, useState, useEffect } from 'react';
import Style from './scrollArrowBottom.module.scss';
import { BsArrowUp } from 'react-icons/bs';

export default function ScrollArrowBottom(props) {
	const [bottom, setBottom] = useState(false);

	useEffect(() => {
		const handleScroll = (event) => {
			// -----> state for transitioning out of Bottom
			if (window.pageYOffset >= document.documentElement.scrollHeight - window.innerHeight - 10) {
				setBottom(true);
			} else if (window.pageYOffset < document.documentElement.scrollHeight - window.innerHeight - 10) {
				setBottom(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={bottom ? Style.Scroll : Style.ScrollHide}
			style={{ color: props.color ? props.color : 'black' }}>
			<BsArrowUp className={Style.Arrow} />
			<p>Back</p>
		</div>
	);
}
