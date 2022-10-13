export const goToIntro = () => {
	window.scrollTo({
		top: window.innerHeight,
		behavior: 'smooth',
	});
};
export const goToNext = () => {
	window.scrollTo({
		top: 300,
		behavior: 'smooth',
	});
};
export const goToWebDev = () => {
	window.scrollTo({
		top: window.innerHeight * 2.6,
		behavior: 'smooth',
	});
};
export const goToFitness = () => {
	window.scrollTo({
		top: window.innerHeight * 3.55,
		behavior: 'smooth',
	});
};
export const goToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};
export const goToBottom = () => {
	window.scrollTo({
		top: document.documentElement.scrollHeight,
		behavior: 'smooth',
	});
};
