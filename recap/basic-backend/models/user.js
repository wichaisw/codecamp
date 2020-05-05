module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', 
    {
      username: {
        type: Datatypes.STRING,
        unique: true
      },
      password: {
        type: Datatypes.STRING,
      },
      name: {
        type: Datatypes.STRING
      }
    }, 
    {
    tableName: 'users',
    timestamps: false,
    }
  )

  return User
};