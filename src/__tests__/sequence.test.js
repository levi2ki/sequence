import { sequence } from "../sequence";

const expect = require("expect.js");
let arr = [];

const testF1 = () => {
  arr.push(1);
};
const testF2 = () => {
  arr.push(2);
};
const testF3 = () =>
  new Promise(res => {
    setTimeout(() => res(3), 1000);
  }).then(n => {
    arr.push(n);
  });
const testF4 = () =>
  new Promise(res => {
    setTimeout(() => res(4), 2000);
  }).then(n => {
    arr.push(n);
  });
const testF5 = () => {
  arr.push(5);
};

sequence(testF1, testF2, testF3, testF4, testF5).then(() => {
  expect(arr).to.eql([1, 2, 3, 4, 5]);
});
