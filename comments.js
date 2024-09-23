// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.
// When a request is made to the server, the server should respond with the comments.html file and the comments.json file.
// The comments.json file should contain an array of comments. Each comment should have a username and a comment property.
// The comments.json file should be served with the Content-Type header set to application/json.

const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.end(data);
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile(path.join(__dirname, 'comments.html'), (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.end(data);
        });
    }
}
);



server.listen(3000, () => {
    console.log('Server is listening on port 3000');
}
);
