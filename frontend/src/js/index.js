
/*!
  An important License comment here
 */
console.log(`A entry point`);

/**
 * Another comment here - not important and should be removed by compressor
 */
console.log("Another ");

/**
 * ES6 test
 */
const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);

// We want to test if source-maps are recognized and we can debug "original" javascript.
const errorFun = () => {
  throw new Error("Hey break here ?");
}

window.iAmJavascriptES6 = iAmJavascriptES6;
window.errorFun = errorFun;
