const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const client = require('twilio')(accountSid, authToken);
var convert = require('xml-js');


const makeCall = (req, res, next) => {
    const twimlObj = {
        _declaration: {
            _attributes: {
                version: "1.0",
                encoding: "utf-8"
            },
            Response: {
                Say: {
                    "_text": "Connecting"
                },
                Dial: {
                    "_text": req.body.to
                },
                Say: {
                    "_text": "Connected"
                }
            }
        }
    };
    const twimlJson = JSON.stringify(twimlObj);
    const options = {compact: true, spaces: 1};
    const twimlXML = convert.json2xml(twimlJson, options);
    console.log(twimlXML);

    client.calls
      .create({
         url: 'https://handler.twilio.com/twiml/EHe77b65bf1061dcf8394c68cf95a4cab3',
         to: `+1${req.body.to}`,
         from: `+1${req.body.from}`
       })
      .then(call => {
          console.log(call.sid);
        }).catch(next)
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

