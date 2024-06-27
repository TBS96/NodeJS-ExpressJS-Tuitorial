// os methods/modules:

const os = require('os');
// console.log(os);
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem()*0.000000001);
console.log(os.freemem()*0.000000001);

// if we want only memory methods: totalmem() and freemem() then we can destructure them as follows:

const {totalmem,freemem} = require('os');
console.log(totalmem());
console.log(freemem());

console.log(__dirname);
// /media/prantikg96/TOYEN-1TB/CSE/B.Tech/PROGRAMS-PRACTICE/WEB-DEV-BOOTCAMP/NodeJS-ExpressJS-MongoDB/3_Module-BuiltInModule-os-&-path-module

console.log(__filename);
// /media/prantikg96/TOYEN-1TB/CSE/B.Tech/PROGRAMS-PRACTICE/WEB-DEV-BOOTCAMP/NodeJS-ExpressJS-MongoDB/3_Module-BuiltInModule-os-&-path-module/os.js