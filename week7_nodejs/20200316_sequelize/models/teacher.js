module.exports = (sequelize, Datatypes) => {
  let teacher = sequelize.define("teacher", {
    name: {
      type: Datatypes.STRING(100)
    },
    age: {
      type: Datatypes.INTEGER
    }
  });

  return teacher;
}