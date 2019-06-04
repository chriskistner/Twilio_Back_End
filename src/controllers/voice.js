const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const client = require('twilio')(accountSid, authToken);


const makeCall = (req, res, next) => {
    const twiml = new VoiceResponse();
 
    if (req.body.To) {
      const dial = twiml.dial({ callerId: '+18507712273' });
      dial.number(req.body.To);
    } else {
      twiml.say('Thanks for calling!');
    }
  
    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
};

const recieveCall = (req, res, next) => {
    const twiml = new VoiceResponse();
    twiml.dial('425-490-4403');
    twiml.say('This is a Test.');

    console.log(twiml.toString());
};

module.exports = {
    makeCall,
    recieveCall
};

