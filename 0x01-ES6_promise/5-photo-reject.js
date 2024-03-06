// this function return a promise rejecting with a ERROR.
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
