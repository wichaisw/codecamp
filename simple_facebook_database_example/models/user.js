module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    // unique: true เพราะ username ห้ามซ้ำ
    username: {
      type: DataTypes.STRING(100),
      unique: true
    }, 
    password: {
      type: DataTypes.STRING(100)
    },
    name: {
      type: DataTypes.STRING(100)
    },
    profileDisplay: {
      type: DataTypes.STRING(100)
    }
  });

  user.associate = (models) => {
    user.hasMany(models.post);
    user.hasMany(models.comment);
    user.belongsToMany(models.user, {
      as: "request_to", 
      foreignKey: "userReceiveFriendId", 
      through: models.friend
    });
    user.belongsToMany(models.user, {
      as: "request_from", 
      foreignKey: "userRequestFriendId", 
      through: models.friend
    });
  }
  
  return user;
}