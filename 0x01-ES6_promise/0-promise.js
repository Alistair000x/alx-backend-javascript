// Return a Promise using the prototype given.
export default function getResponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 100);
	});
}
