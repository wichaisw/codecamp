module.exports = (sequelize, datatypes) => {
  const Manager = sequelize.define("manager", {
    fullname: {
      type: datatypes.STRING(255),
      unique: true
    },
    salary: {
      type: datatypes.INTEGER(10)
    }

  })

  Manager.associate = (models) => {
    Manager.belongsTo(models.project);
  }

  return Manager;
}