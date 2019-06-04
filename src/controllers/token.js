const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const ClientCapability = require('twilio').jwt.ClientCapability;

const getToken = (req, res, next) => {
    const appSid = 'APa48f53a7016dc74376c5fe2e2e243e27';

    const capability = new ClientCapability({
        accountSid: accountSid,
        authToken: authToken,
      });

      capability.addScope(
        new ClientCapability.OutgoingClientScope({ applicationSid: appSid })
      );

      const token = capability.toJwt();

      res.set('Content-Type', 'application/jwt');
      res.send(token);
};

module.exports = {getToken}