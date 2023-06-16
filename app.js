// function arrToObj(arr) {
//   return arr.reduce((obj, item) => {
//     obj[item[0]] = item[1];
//     return obj;
//   }, {});
// }

import logger, { TYPE_LOG } from "./logger.js";
logger("Test Message...", TYPE_LOG);

function arrToObj(arr) {
  return arr.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}
const infoArr = [["name", "John"]];
const infoObj = arrToObj(infoArr);
console.log(infoObj);

const { ...rest } = {
  c: "val2",
  d: "val3",
};

console.log(rest);

//--document.createElement() !
