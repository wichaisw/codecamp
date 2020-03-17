module.exports = function(sequelize, Datatypes) {

  let album = sequelize.define("album", {
    name: {
      type: Datatypes.STRING(100)
    },
    release_date: {
      type: Datatypes.DATE
    }
  })
  

  album.associate = (models) => {
    album.belongsTo(models.artist)
    album.hasMany(models.song)
  }

  return album;
}