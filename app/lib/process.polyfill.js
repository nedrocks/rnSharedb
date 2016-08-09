/*
 * process.nextTick is not defined in react native. Took this idea from
 * http://stackoverflow.com/a/35305611/1327710.
 */

if (typeof process === 'undefined') process = {};
process.nextTick = setImmediate;
module.exports = process;
