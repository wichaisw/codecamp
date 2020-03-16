module.exports = function(sequelize, Datatypes) {
  let student = sequelize.define("student", {
    name: {
      type: Datatypes.STRING(100)
    },
    year: {
      type: Datatypes.INTEGER
    }
  });

  return student;
}