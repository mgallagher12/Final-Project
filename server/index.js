// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.load();

// DB Setup
// const db = mongoose.connect('mongodb://localhost:auth/auth');

// MLab
const userpass = process.env.MONGO_USER + ':' + process.env.MONGO_PWD
const db = mongoose.connect('mongodb://' + userpass + '@ds121171.mlab.com:21171/nightlife');

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
