const express = require('express');
const mongojs = require('mongojs');
const router = express.Router();
require('dotenv').config();

const db = mongojs(process.env.MONGO_DB_URI, ['images']);
const images = db.collection('images');
const pace_data = db.collection('pace_data');

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
