const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendText = (req, res, next) => {
    console.log('firing');
    console.log(accountSid);
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

module.exports = {
    sendText
}