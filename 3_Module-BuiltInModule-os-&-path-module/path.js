// path methods/modules:

const path = require('node:path');
// console.log(path);

const extensionName = path.extname('index.html');
console.log(extensionName);
// .html

const joinName = path.join(__dirname + '/views');
console.log(joinName);
// /media/prantikg96/TOYEN-1TB/CSE/B.Tech/PROGRAMS-PRACTICE/WEB-DEV-BOOTCAMP/NodeJS-ExpressJS-MongoDB/3_Module-BuiltInModule-os-&-path-module/views

const joinName1 = path.join(__dirname + '/../views');
console.log(joinName1);
// /media/prantikg96/TOYEN-1TB/CSE/B.Tech/PROGRAMS-PRACTICE/WEB-DEV-BOOTCAMP/NodeJS-ExpressJS-MongoDB/views

const baseName = path.basename('/a/b/c/d/index.html');
console.log(baseName);
// index.html

const baseName1 = path.basename('/a/b/c/d/index.html', '.html');
console.log(baseName1);
// index

console.log(process.env.PATH);
// /usr/local/lib/nodejs/node-v22.3.0-linux-x64/bin:/usr/local/lib/nodejs/node-v22.3.0-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

console.log(process.env.PATH);
// // '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

process.env.PATH.split(path.delimiter);
// // ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']

const dirName = path.dirname('/a/b/c/d/e/f/sss.js');
console.log(dirName);
// // /a/b/c/d/e/f

const pathFormat = path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
});
console.log(pathFormat);
// // /home/user/dir/file.txt

const pathFormat1 = path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
});
console.log(pathFormat1);
// // /file.txt

const pathFormat2 = path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
});
console.log(pathFormat2);
// // /file.txt

const pathFormat3 = path.format({
    root: '/',
    name: 'file',
    ext: 'txt'
});
console.log(pathFormat3);
// // /file.txt

// on windows:
const pathFormat4 = path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
});
console.log(pathFormat4);
// C:\\path\\dir\\file.txt