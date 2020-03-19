// แยกมาเก็บ handler เพื่อ best practice
exports.addFiveFromId = function (req, res) {
  res.send(`${Number(req.params.id) + 5}`);
}