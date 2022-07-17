export const delay = (time) => (promiseResult) =>
  new Promise((resolve) => setTimeout(() => resolve(promiseResult), time));
