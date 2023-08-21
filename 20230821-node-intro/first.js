const http = require('http');
const PORT = 3000;

const serverFunc = (req, res) => {
    console.log('SERVER: IN');
    console.log(req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    console.log('SERVER: OUT');
};

http.createServer(serverFunc).listen(PORT);

console.log('SERVER: START');

/*
http://localhost:8080/4
16

http://localhost:8080/0
1

http://localhost:8080/10
1024

http://localhost:8080/dsf
Problem with input number

http://localhost:8080/31
The number is too big

http://localhost:8080/30
1073741824


*/