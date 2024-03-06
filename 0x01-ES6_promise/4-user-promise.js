// this code return a resloved promise using a function given.
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
