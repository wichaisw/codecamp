module.exports = function(sequelize, Datatypes) {

  let song = sequelize.define("song", {
    name: {
      type: Datatypes.STRING(100)      
    }
  })

  // song.associate = (models) => {
  //   song.belongsToMany(models.artist, {
  //     through: "plays"
  //   });
  // }

  song.associate = (models) => {
    song.belongsTo(models.album);
    song.belongsTo(models.artist);
    song.belongsToMany(models.instrument, {through: "instrumentSong"});
  }

  return song;
}