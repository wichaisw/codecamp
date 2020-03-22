module.exports = function(sequelize, datatypes) {
  const Use = sequelize.define("use", {
    amount: {
      type: datatypes.INTEGER(100)
    }
  }) 

  return Use;
}

