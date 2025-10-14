const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/:greeting/:name', (req, res) => {
  console.log(req.params.name);
  res.send(`What a delight it is to see you once more,  ${req.params.name} , izgubio si!`);
});


app.get('/:roll', (req, res) => {

})


const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles', (req, res) => {
  res.send(collectibles.map((c, i) => `${i}: ${c.name} - $${c.price}`).join('\n'));
});

app.get('/collectibles/:index', (req, res) => {
  const idx = Number(req.params.index);
  if (Number.isNaN(idx) || idx < 0 || idx >= collectibles.length) {
    return res.status(404).send('Collectible is out of stock');
  }
  const item = collectibles[idx];
  res.send(`${item.name} - Price: $${item.price}`);
});

  const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  const results = [];

  shoes.forEach((shoe) => {
    if (
      !(req.query['max-price'] && shoe.price > req.query['max-price']) &&
      !(req.query['min-price'] && shoe.price < req.query['min-price']) &&
      !(req.query['type'] && shoe.type !== req.query['type'])
    ) {
        results.push(shoe);
      }
  });
  res.send(results);

app.listen(3000, () => {
  console.log('listening on port 3000');
});





