module.exports = (sequelize, dataTypes) => {
  const Project = sequelize.define("project", {
    project_name: {
      type: dataTypes.STRING(255)
    },
    start_date: {
      type: dataTypes.DATE
    },
    budget: {
      type: dataTypes.INTEGER(100)
    }
  })

  Project.associate = (models) => {
    Project.hasOne(models.manager);1
    Project.belongsToMany(models.equipment, {through: models.use, foreignKey: "project_id"} );
  }

  return Project;

}