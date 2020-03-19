module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define("post", {
    text: {
      type: DataTypes.STRING(255)
    },
    picture: {
      type: DataTypes.STRING(500)
    },
    // ไม่ต้องใส่ก็ได้ เพราะปกติ sequelize สร้าง creatAt updateAt ให้อัตโนมัติอยู่แล้ว ถ้าใส่เองก็ timestamp false
    timestamp: {
      type: DataTypes.DATE
    }
  }, { timestamps: false ,
    freezeTableName: true   // ชื่อตาราง ไม่มี s 
  }
);

  post.associate = (models) => {
    post.hasMany(models.comment);
    post.belongsTo(models.user);
  }


  return post;
}