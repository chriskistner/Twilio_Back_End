const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8080

require('dotenv').config();
app.use(cors());
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
};

const sms= require('./src/routes/text');
const voice = require('./src/routes/voice');
const token = require('./src/routes/token');

app.use('/sms', sms);
app.use('/voice', voice);
app.use('/token', token)

app.use(function(req, res, next) {
  next({status: 404, error: 'Route Not Found'})
});

app.use((err, _req, res, _next)=> {
  console.error("ERROR: ", err)
  const status = err.status || 500
  const error = err.error || 'Internal Server Error'
  const stack = err.stack
  res.status(status).json({ error, status, stack })
});

if (process.env.NODE_ENV !== 'development') {
  const listener = () => console.log(`listening on ${port}`)
  let server = app.listen(port, listener)
};