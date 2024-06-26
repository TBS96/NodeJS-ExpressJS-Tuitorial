const fs = require('fs');

// console.log(fs);


// Asynchonus functions should have callback functions as shown below:

// // To create and write a file:
// fs.writeFile('demo1.txt', "My name is Prantik Ghosh.\n", (err) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("write successful");
//     }
// });


// // To append data in an existing file:
// fs.appendFile('demo1.txt', "I am learing NodeJS", (err) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("append successful");
//     }
// });


// // To read in an existing file:
// fs.readFile('demo1.txt', 'utf-8', (err, data) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log(data);
//     }
// });


// // To rename an existing file:
// fs.rename('demo1.txt', 'DEMO1.txt', (err) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("successful");
//     }
// });


// // To delete an existing file:
// fs.unlink('DEMO1.txt', (err) => {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("successful");
//     }
// });


// To check whether a file exits or not:
fs.exists('DEMO1.txt', (result) => {
    if(result)
    {
        console.log("exists");
    }
    else
    {
        console.log("doesn't exist");
    }
});



// Synchonus functions should not have callback functions as shown below:

// To append data in an existing file:
fs.appendFileSync('DEMO1.txt', "I am learing NodeJS");