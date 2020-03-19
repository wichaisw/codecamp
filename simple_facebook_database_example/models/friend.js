module.exports = (sequelize, DataTypes) => {
  const friend = sequelize.define("friend", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      // enum คล้ายๆ array แต่มีแค่ ตัวที่กำหนดให้
      type: DataTypes.ENUM("request", "friend", "block")
    }
  });

  // friend.associate = (models) => {
  //   friend.belongsToMany(models.user);
  // }
  
  return friend;
}