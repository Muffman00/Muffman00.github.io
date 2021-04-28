const express = require('express');
const app = express();
const port = 3000;
const comp322 = require('./comp322');
const white = require('./white');

app.use('/comp322', comp322);
//TODO: Add your own router
app.use('/white', white);

app.get('/comp322/grade', function (req, res) {
  res.send('Got a GET request at /grade, Joshua White')
});

app.post('/comp322/grade', function (req, res) {
  res.send('Got a POST request at /grade, Joshua White')
});

app.put('/comp322/grade', function (req, res) {
  res.send('Got a PUT request at /grade, Joshua White')
});

app.delete('/comp322/grade', function (req, res) {
  res.send('Got a DELETE request at /grade, Joshua White')
});

app.get('/white/joshua', function (req, res) {
  res.send('The free bird leaps')
});

app.post('/white/joshua', function (req, res) {
  res.send('on the back of the wind')
});

app.put('/white/joshua', function (req, res) {
  res.send('and floats downstream')
});

app.delete('/white/joshua', function (req, res) {
  res.send('till the current ends')
});

app.get('/white', function (req, res) {
  res.send('and dips his wings')
});

app.post('/white', function (req, res) {
  res.send('in the orange sun rays')
});

app.put('/white', function (req, res) {
  res.send('and dares to claim the sky')
});

app.delete('/white', function (req, res) {
  res.send('But a bird that stalks')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
