const http = require('http');
const express = require('express');
const messagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new messagingResponse();

    twiml.message('Take me to your leader');

    res.writeHead(200, {'Content-Type': 'text/xml'});

    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('listening')
});