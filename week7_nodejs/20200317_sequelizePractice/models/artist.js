module.exports = function(sequelize, Datatypes) {
  

  let artist = sequelize.define("artist", {
    name: {
      type: Datatypes.STRING(100)
    },
    phone_number: {
      type: Datatypes.STRING(10)
    }
  });



 
  
  artist.associate = (models) => {
    artist.belongsTo(models.address);
    artist.hasMany(models.song);
    artist.hasMany(models.album);
    // descriptive arrtibite สร้างตารางมาก่อน แล้ว add ผ่าน object ไม่ได้ใส่แค่ string
    artist.belongsToMany(models.instrument, {
      through: models.play
    });
  }

  return artist;
}