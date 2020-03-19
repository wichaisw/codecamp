module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define("comment", {
    message: {
      type: DataTypes.STRING
    }
  });

  comment.associate = (models) => {
    comment.belongsTo(models.user);
    comment.belongsTo(models.post);
  }

  return comment;
}