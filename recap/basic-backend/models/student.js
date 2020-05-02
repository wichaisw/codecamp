module.exports = (sequelize, Datatypes) => {
  const Student = sequelize.define(
    "Student",
    {
      name: {
        type: Datatypes.STRING,
      },
      age: {
        type: Datatypes.INTEGER,
      },
      phone_number: {
        type: Datatypes.STRING(10),
      },
    },
    {
      timestamps: false,
      tableName: "students",
    }
  );

  return Student
};