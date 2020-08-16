const express = require('express');
const mongoose = require('mongoose');
const mongojs = require('mongojs');
const router = express.Router();
require('dotenv').config();

// const objectSchema = new mongoose.Schema({
//   urls: {
//     full: String,
//     raw: String,
//     regular: String,
//     small: String,
//     thumb: String,
//   },
// });
// const unsplashSchema = new mongoose.Schema({
//   items: [objectSchema],
// });
// const Images = mongoose.model('Images', unsplashSchema);
console.log('loggat från api.js: ', process.env.MONGO_DB_URI);
const db = mongojs(process.env.MONGO_DB_URI, ['images']);
const images = db.collection('images');
const pace_data = db.collection('pace_data');
// mongoose.connect(DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

router.get('/', (req, res) => {
  db.images.find((err, docs) => {
    res.send(docs);
  });
});

router.get('/uid', (req, res) => {
  res.send({ id: process.env.UNSPLASH_CLIENT_ID });
});

router.get('/last_update', (req, res) => {
  db.pace_data.find((err, docs) => {
    res.send(docs);
  });
});

router.post('/last_update/update/:id', (req, res) => {
  const now = new Date().getTime();
  db.pace_data.findAndmodify(
    {
      query: { _id: req.params.id },
      update: { time: now },
    },
    (err, doc) => {
      res.send(doc);
    },
  );
});

router.post('/last_update/:last_update', async (req, res) => {
  db.pace_data.insert({ time: req.params.last_update });
});

router.post('/', async (req, res) => {
  db.images.insert(req.body);
  res.send(req.body);
});

router.delete('/delete/images', async (req, res) => {
  db.images.remove({});
  res.send('collection empty');
});

module.exports = router;

// const twentyFourHoursInSeconds = 60 * 60 * 24;
// let now = new Date();
// now = now.getTime();
// const unsplashApiQueryString =
//   'https://api.unsplash.com/search/photos/?client_id=pmZFvy6hwVKmhYNKLeBo5mHTHJ-ORJHBSm8zjkUWj4A&query=running';
// get seconds from mongodb on last cached version
// if now  > cache + secinaday -> call unsplash and re-new cache to mongodb, also set 'now' as new timestamp
// call mongodb and return images object to user
// let result = '';
// fetch(unsplashApiQueryString)
//   .then(res => res.text())
//   .then(res => (result = res));
