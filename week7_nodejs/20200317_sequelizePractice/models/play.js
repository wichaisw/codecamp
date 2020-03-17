module.exports = (sequelize, Datatypes) => {
  const play = sequelize.define("play", {
    minute: {
      type: Datatypes.INTEGER
    }
  })

  return play;
}