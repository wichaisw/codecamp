let counter = 0;

getCurrentCounter = (req, res) => {
  res.send(String(counter));
}

updateCounter = (req, res) => {
  const newCounter = req.body.counter;
  counter = newCounter;
  res.send(String(counter));
}

module.exports = {
  getCurrentCounter,
  updateCounter
}