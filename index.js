const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = 'e52df63786da2cd5e19a277e532779d9';
const baseURL = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('WELCOME, PLEASE WORK!');
});

//Get Product Details
app.get('/products/:productId', async(req, res) => {
  const { productId } = req.params;

  try{
    const response = await request(`${baseURL}&url=https://www.amazon.com/dp/${productId}`);

    res.json(JSON.parse(response));
  }catch (error){
    res.json(error);
  }
});

app.listen(PORT, () => console.log (`Server running on port ${PORT}`));