




const http = require('http');

const host = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);


    /** TO SEND DATA IN PLAIN TEXT */
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello from side hustle!');


    /** TO SEND DATA IN JSON FORMART (curl -i 127.0.0.1:5000) */
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'application/json');

    // const serializeData = JSON.stringify({
    //     name: "Jeff",
    //     age: 23,
    //     country: "Nigeria"
    // });

    // res.write(serializeData);
    // res.end();


    /** TO CHECK ERROR */
    // req.on('error', (err) => {
    //     console.log ('An error occured!');
    // });

    // res.on('error', (err) => {
    //     console.log('An error occured!');
    // });


    /** TO SWITCH PAGES OR CHANGE URL */
    const urlPath = req.url;

    if (urlPath === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello from side hustle!');

    } else if (urlPath === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This the about us page!');
    } else if (req.url === '/users'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This the Users page bro!');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('page not found');
    } 
});

server.listen(port, host, () => {
    console.log(`Running at ${host}:${port}`);
});