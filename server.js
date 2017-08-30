const express = require('express');
const path = require('path');
const http = require('http');

const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const api = require('./server/routes/api');

const app = express();

const port = process.env.port || 3000;
app.set('port', port);

// Set static path
// app.use(express.static(path.join(__dirname)));

// Body parser middleware
// ทำให้ express ของเราสามารถอ่านและส่งค่า Body ได้
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors());

// Set out api route
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, function() {
    console.log('Listen :3000 Successfully');
});