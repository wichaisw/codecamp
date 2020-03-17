module.exports = function(sequelize, Datatypes) {
  let student = sequelize.define("student", {
    name: {
      type: Datatypes.STRING(100)
    },
    year: {
      type: Datatypes.INTEGER
    },
    point: {
      type: Datatypes.INTEGER
    }
  });

// one-to-one
  // student.associate = models => {
  //   student.hasOne(models.teacher)
  // }

// one-to-many
  student.associate = models => {
    student.belongsTo(models.teacher)
  }

  student.associate = models => {
    student.belongsToMany(models.teacher, {through: "TeacherStudent"})
  }

  return student;
}