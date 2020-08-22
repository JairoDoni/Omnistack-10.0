const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.SERVER_MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
