const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const messagingResponse = require('twilio').twiml.MessagingResponse;
const client = require('twilio')(accountSid, authToken);

const sendText = (req, res, next) => {

    client.messages
        .create({
            to: `+1${req.body.to}`,
            from: `+1${req.body.from}`,
            body: req.body.message,
        })
        .then(message => {
        console.log(message.sid)
        res.status(200).send(message.sid)
    }).catch(next)
};

const recieveText = (req, res, next) => {
    const twiml = new messagingResponse();

    twiml.message('Take me to your leader');

    res.writeHead(200, {'Content-Type': 'text/xml'});

    res.end(twiml.toString());
};

module.exports = {
    sendText,
    recieveText
}