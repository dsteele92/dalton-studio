export const goToIntro = () => {
	window.scrollTo({
		top: window.innerHeight * 1.15,
		behavior: 'smooth',
	});
};
export const goToWebDev = () => {
	window.scrollTo({
		top: window.innerHeight * 2.2,
		behavior: 'smooth',
	});
};
export const goToFitness = () => {
	window.scrollTo({
		top: window.innerHeight * 3.25,
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
