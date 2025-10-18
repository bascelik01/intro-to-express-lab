const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World</h1>');
// });

app.get("/greeting/:name/:age", (req, res) => {
  console.log(req.params.name);
  res.send(`What a delight it is to see you once more, ${req.params.name}`);
});



app.get('/roll/:number', (req, res) => {
  const max = parseInt(req.params.number, 10);
  if (isNaN(max)) {
    return res.send(`You must enter a valid number!`);
  } else {
    const roll = Math.round(Math.random() * max);
    return res.send(`You rolled ${roll}`);
  }
})

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];
app.get('/collectibles/:index', (req, res) => {
  const ind = Number(req.params.index); // Convert index to a number

  if (isNaN(ind) || ind < 0 || ind >= collectibles.length) {
    return res.send(`This item is not yet in stock. Check back soon!`);
  } else {
    const item = collectibles[ind];
    return res.send(`So, you want the ${item.name}? For $${item.price}, it can be yours!`);
  }
})

app.get('/hello', (req, res) => {
  res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.age} years old!`);
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

app.get('/shoes', (req, res) => {
  let minPrice = req.query.minPrice;
  let maxPrice = req.query.maxPrice;
  if (isNaN(minPrice) || isNaN(maxPrice)) {
    return res.send('Error, price has to be number')
  }
  let type = req.query.type;
  let foundShoes = ""
  shoes.forEach(element => {
    if (element.type === type && element.price <= maxPrice && element.price >= minPrice) {
      foundShoes += "Name: " + element.name + ", price:" + element.price + '</br>'
    }
  });
  res.send(foundShoes);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
