const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    console.log(req.method);
    // fs.readFile('./big.file', (err, data) => {
    //     if (err) {
    //         throw err;
    //     }

    //     res.ned(data);
    // });

    const src = fs.createReadStream('./big.file');
    src.pipe(res);

    // res.end('Hello');
});
server.listen(8000);