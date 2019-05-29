const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
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
}

module.exports = {
    makeCall
}

