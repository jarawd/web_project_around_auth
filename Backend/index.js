const express = require('express');
const app = express();
const cors = require('cors');
const { PORT = 3000 } = process.env;

app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  res.status(200).send('Succesful register');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
