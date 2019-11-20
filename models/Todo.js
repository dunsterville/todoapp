module.exports = (Model, DataTypes, sequelize) => {
  class Todo extends Model {}

  Todo.init({
    name: {type: DataTypes.STRING, allowNull: false},
    isCompleted: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  }, {
    sequelize,
    modelName: 'todo'
  })

  return Todo
}