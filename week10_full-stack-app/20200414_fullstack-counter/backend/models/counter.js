module.exports = (sequelize, Datatypes) => {
  const Counter = sequelize.define(
    'counter', 
    {
      current: {
        type: Datatypes.INTEGER,
      },
    },
    {
      timestamps: false
    }
  );

  Counter.associate = models => {
    Counter.belongsTo(models.user, { foreignKey: "user_id" });
  }

  return Counter;
}