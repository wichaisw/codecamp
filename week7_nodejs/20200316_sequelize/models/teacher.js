module.exports = (sequelize, Datatypes) => {
  let teacher = sequelize.define("teacher", {
    name: {
      type: Datatypes.STRING(100)
    },
    age: {
      type: Datatypes.INTEGER
    }
  });

// one-to-one
  // teacher.associate = models => {
  //   teacher.belongsTo(models.student)
  // } 

// one-to-many
  teacher.associate = models => {
    teacher.hasMany(models.student)
  } 

  teacher.associate = models => {
    teacher.belongsToMany(models.student, {through: "TeacherStudent"})
  }

  return teacher;
}