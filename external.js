//Working with external server

const http = require('http');

//GET request to an external server/*********** */
// const request = http.get('http://www.google.com', (response) => {
//     console.log(`Status Code: ${response.statusCode}`);
//     console.log(`Headers: ${response.headers}`);

//     response.on('data', (chunk) => console.log(`Chunk recieved: ${chunk}`));
// });

// request.on('error', (err) => console.error(err));



//POST, DELETE or PUT  request to an external server /************** */ 
const data = JSON.stringify({
    username: 'Jefferson'
});

const options = {
    hostname: '',
    port: '',
    method: 'POST', //or PUT or DELETE
    path: '',
    headers:{
        'Content-Type': 'application/json'
    }
};

const request = http.request(options, (response) => {
    console.log(`Status code: ${response.statusCode}`);
    console.log(`Headers: ${response.headers}`);

    response.on('data', (chunk) => console.log(`Chunk recieved: ${chunk}`));
});

request.on('error', (err) => console.log(err));

request.write(data);

request.end();