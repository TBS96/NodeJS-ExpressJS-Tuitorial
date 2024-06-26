// // To import all the functions from student-local-module:

// const studentModule = require('./student-local-module');

// console.log(studentModule.getName());
// console.log(studentModule.getAge());
// console.log(studentModule.cgpa);


// To import specific function from student-local-module:

const {getProfession} = require('./student-local-module');

console.log(getProfession());