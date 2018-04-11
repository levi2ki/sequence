export const sequence = (...args) => {
  return args.reduce((curF, nextF) => {
    return curF.then(() => Promise.resolve(nextF)).then(nextF => nextF());
  }, Promise.resolve(() => {}));
};
