'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: {
          name: 'id'
        }
      });
      Post.hasMany(models.Comment);
    }
  };
  Post.init({
    id: {
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    date: DataTypes.DATE,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};