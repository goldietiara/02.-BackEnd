let { penjumlahan, penggurangan } = require("../my_modules");

console.log(penjumlahan(20, 7));
console.log(penggurangan(10, 9));

/////////////
//js modules
let timers = require("timers");

// timers.setTimeout(
//   (timestamp = () => {
//     console.log("HALLOOO SEMUA");
//   }),
//   60
// );

// timers.setTimeout(
//   (timestamp = () => {
//     console.log("HALLOOO SEMUA");
//   }),
//   60 * 5
// );

let url = require(`url`);

let link1 = "https://github.com/goldietiara/JavaScript";
let parsing1 = url.parse(link1, true);

console.log(`========= LINK 1`);
console.log(`Link1 host : ${parsing1.host}`);
console.log(`Link1 path : ${parsing1.pathname}`);

let link2 = "http://lin.id/data.html?tgl-16&bln-may";
let parsing2 = url.parse(link2, true);

console.log(`\n========= LINK 2`);
console.log(`Link2 host : ${parsing2.host}`);
console.log(`Link2 path : ${parsing2.pathname}`);
console.log(`Link2 query : ${parsing2.search}`);

let colors = require("colors");
console.log("pelangi".rainbow);
console.log("merah".red);
console.log("odi".blue.bgYellow);

let moment = require("moment");
let today = moment();
console.log(today);

let ryan = () => {};
