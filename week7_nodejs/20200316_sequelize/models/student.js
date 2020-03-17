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

  student.associate = models => {
    student.hasOne(models.teacher)
  }

  return student;
}