const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://adela:' + process.env.MONGO_ATLAS_PW + '@clustermeanapp.mlo9uoq.mongodb.net/node-angular?retryWrites=true&w=majority&appName=ClusterMEANApp')
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;

