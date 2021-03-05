const express = require('express');
const db = require('./db/bikes.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/bikes', async (req, res) => {
  const getBikes = await db.getAllBikes();
  res.json({ getBikes });
});

app.post('/bikes', async (req, res) => {
  const id = await db.createBike(req.body);
  const postDetails = req.body;
  res.json({ success: true, data: postDetails });
});
app.get('/bikes/:id', async (req, res) => {
  const getBike = await db.getBike(req.params.id);
  res.json({ data: getBike });
});
app.patch('/bikes/:id', async (req, res) => {
  const bikeUpdate = await db.updateBike(req.params.id, req.body);
  res.json({ success: `${'updated bike with id number'}${bikeUpdate}` });
});

app.delete('/bikes/:id', async (req, res) => {
  const bikeDelete = await db.deleteBike(req.params.id);
  res.json({ success: `${'bike with id'}${bikeDelete}is deleted` });
});

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }

app.listen(3000 || process.env.PORT, () => {
  console.log('server is running on port number 3000');
});
