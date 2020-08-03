const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { mongoose } = require('./db.js' ,{useUnifiedTopology: true},  { useNewUrlParser: true });
 var helps = require('./routes/helps.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.use('/helps', helps);

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
  });
  
  

app.listen(3000, () => console.log('Server started at port : 3000'));


