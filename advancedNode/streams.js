// # Streams
// ## Transform
const { Transform } = require('stream');
const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);

// ## Duplex
// const { Duplex } = require('stream');

// const inoutStream = new Duplex({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         callback();
//     },

//     read(size) {
//         if (this.currentCharCode > 90) {
//             this.push(null);
//             return;
//         }

//         this.push(String.fromCharCode(this.currentCharCode++));
//     }
// });

// inputStream.fromCharCode = 65;
// process.stdin.pipe(inoutStream).pipe(process.sdout);


// ## Readable Streams
// const { Readable } = require('stream');

// const inStream = new Readable();
// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// inStream.push(null);

// const inStream = new Readable({
//     read(size) {
//         setTimeout(() => {
//             if (this.currentCharCode > 90) {
//                 this.push(null);
//                 return;
//             }
//             this.push(String.fromCharCode(this.currentCharCode++));
//         }, 100);
//     }
// });

// inStream.currentCharCode = 65;
// inStream.pipe(process.stdout);

// process.on('exit', () => {
//     console.error(
//         `\n\ncurrentCharCode is ${inStream.currentCharCode}`
//     );
// });
// process.stdout.on('error', process.exit);

// ## Writable Streams
//
// const { Writable } = require('stream');
// const outStream = new Writable({
//     write(chunk, encoding, callback) {
//         console.log(chunk.toString());
//         callback();
//     }
// });

// process.stdin.pipe(outStream);

// eller
// process.stdin.pipe(process.stdout);