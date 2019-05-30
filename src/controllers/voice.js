const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const client = require('twilio')(accountSid, authToken);

const makeCall = (req, res, next) => {
    client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: `+1${req.body.to}`,
         from: `+1${req.body.from}`
       })
      .then(call => {
          console.log(call.sid)
        }).catch(next)
};

const recieveCall = (req, res, next) => {
    console.log('firing');
    const twiml = new VoiceResponse();

    twiml.say('Hello from your pals at Twilio! Have fun.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
};

module.exports = {
    makeCall,
    recieveCall
};

