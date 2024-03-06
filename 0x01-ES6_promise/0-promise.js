// Return a promise using the prototype given.
export default function getReponseFromAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 100);
	});
}
