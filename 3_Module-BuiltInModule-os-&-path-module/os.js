// os methods/modules:

const os = require('os');

// console.log(os);

console.log(os.userInfo());
// {
//     uid: 1000,
//     gid: 1000,
//     username: 'prantikg96',
//     homedir: '/home/prantikg96',
//     shell: '/bin/bash'
// }

console.log(os.homedir());
// /home/prantikg96

console.log(os.hostname());
// prantik-lnx

console.log(os.totalmem()*0.000000001);
// 8.235855872

console.log(os.freemem()*0.000000001);
// 4.638732288


// if we want only memory methods: totalmem() and freemem() then we can destructure them as follows:

const {totalmem,freemem} = require('os');
console.log(totalmem());
// 8235855872
console.log(freemem());
// 4638732288

console.log(__dirname);
// /media/prantikg96/TOYEN-1TB/CSE/B.Tech/PROGRAMS-PRACTICE/WEB-DEV-BOOTCAMP/NodeJS-ExpressJS-MongoDB/3_Module-BuiltInModule-os-&-path-module

console.log(__filename);
// /media/prantikg96/TOYEN-1TB/CSE/B.Tech/PROGRAMS-PRACTICE/WEB-DEV-BOOTCAMP/NodeJS-ExpressJS-MongoDB/3_Module-BuiltInModule-os-&-path-module/os.js