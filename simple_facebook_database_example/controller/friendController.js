// แยกมาเก็บ handler เพื่อ best practice
exports.sendhello = (req, res) => {
  res.send("Hello from controller friend.");
}
