require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const mainRoute = require('./routes/main');
const storiesRoute = require('./routes/stories');

const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(morgan('tiny'));


app.use('/', mainRoute);
app.use('/stories', storiesRoute);

app.listen(process.env.PORT)
  .on('listening', () => {
    console.log('server listening on port:', process.env.PORT);
  })
  .on('error', (err) => {
    console.error('### error opening port:', process.env.PORT);
    console.error(err);
  });
