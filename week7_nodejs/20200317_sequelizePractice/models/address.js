module.exports = function(sequelize, Datatypes) {

  // STRING ไม่กำหนดขนาดจะเป็น 255
  let address = sequelize.define("address", {
    addr: {
      type: Datatypes.STRING
    }
  })

  address.associate = (models) => {
    address.hasMany(models.artist);
  }

  return address;
}