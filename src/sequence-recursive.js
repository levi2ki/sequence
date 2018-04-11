export const seq = async (...args) => {
  if (!args.length) {
    return null;
  }
  await args[0]();
  return await seq(...args.slice(1));
};
