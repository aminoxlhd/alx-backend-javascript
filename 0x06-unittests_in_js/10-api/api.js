const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(7865, () => console.log('API available on localhost port 7865'));

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = parseInt(req.params.id);
  if (isNaN(cartId)) return res.status(404).send('Invalid cart ID');

  const paymentMethods = ['Visa', 'Mastercard', 'PayPal'];
  res.send(`Payment methods for cart ${cartId}: ${paymentMethods.join(', ')}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', bodyParser.json(), (req, res) => {
  const { userName } = req.body;
  if (!userName) return res.status(400).send();

  res.send(`Welcome ${userName}`);
});
