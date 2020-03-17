module.exports = function(sequelize, Datatypes) {

  let instrument = sequelize.define("instrument", {
    name: {
      type: Datatypes.STRING(100)
    }
  })

  instrument.associate = (models) => {
    instrument.belongsToMany(models.song, {
      through: "instrumentSong"
    });
    // descriptive arrtibite สร้างตารางมาก่อน แล้ว add ผ่าน object ไม่ได้ใส่แค่ string
    // ไม่ได้สร้างคอลัมน์ใหม่ขึ้นมา แต่เชื่อมใส่ตาราง play ที่สร้างมาแล้ว
    instrument.belongsToMany(models.artist, {
      through: models.play
    })
  }

  return instrument;
}