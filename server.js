require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const mainRoute = require('./routes/main');
const storeRoute = require('./routes/store');
const storiesRoute = require('./routes/stories');
const togglesRoute = require('./routes/toggles');
const userRoute = require('./routes/user');

const app = express();

app.use(express.static('public'));

app.use(cors());
app.use(morgan('tiny'));


app.use('/', mainRoute);
app.use('/store', storeRoute);
app.use('/stories', storiesRoute);
app.use('/toggles', togglesRoute);
app.use('/user', userRoute);

app.listen(process.env.PORT)
  .on('listening', () => {
    console.clear();
    console.log('server listening on port:', process.env.PORT);
  })
  .on('error', (err) => {
    console.error('### error opening port:', process.env.PORT);
    console.error(err);
  });
