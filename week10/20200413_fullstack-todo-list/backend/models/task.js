module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task',{
        task:{
            type: DataTypes.STRING
        },
        isCompleted: {
            type: DataTypes.BOOLEAN
        }
    })

    return Task;
}