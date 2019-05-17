const accountSid = 'ACe96d7077a90b325fc41deec1bdef1b2f';
const authToken = '72c9996b170f28b724ebcba16db38c73';
const client = require('twilio')(accountSid, authToken);

let sendText = (to, from, message) => {
  console.log('Firing');
  client.messages
  .create({
     body: message,
     from: `+${from}`,
     to: `+${to}`
   })
  .then(message => console.log(message.sid));
};


sendText('4254174581', '4254904403', 'Testing 123.');