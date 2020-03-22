module.exports = function(sequelize, datatypes) {
  const Equipment = sequelize.define("equipment", {
    equipment_name: {
      type: datatypes.STRING(100)
    },
    color: {
      type: datatypes.STRING(20)
    }
  }, {
    freezeTableName: true
  })

  Equipment.associate = function(models) {
    Equipment.belongsToMany(models.project, {through: models.use, foreignKey: "equipment_id"} );
  }

  return Equipment;
}