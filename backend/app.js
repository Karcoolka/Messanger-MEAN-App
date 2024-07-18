const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const Post = require('./models/post');

mongoose.connect('mongodb+srv://adela:eqYA8DVGbouYnaeW@clustermeanapp.mlo9uoq.mongodb.net/node-angular?retryWrites=true&w=majority&appName=ClusterMEANApp')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

// eqYA8DVGbouYnaeW
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: createdPost._id
    });
  })

});

app.get('/api/posts', (req, res, next) => {
  Post.find()
    .then(documents => {
      res.status(201).json({
        message: 'Post added successfully',
        posts: documents
      });
    });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fadf12421l',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'fadf1zzzzz2421l',
      title: 'Second server-side post',
      content: 'This is coming from the server'
    },
  ];
  res.status(200)
    .json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

app.delete('/api/posts/:id', (req, res, next) => {
  console.log(req.params.id);
  res.status(200).json({ message: 'Post deleted!' });
});



module.exports = app;
