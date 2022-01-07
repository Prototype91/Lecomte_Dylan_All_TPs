'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      date: {
        type: Sequelize.DATE
      },
      author: {
        type: Sequelize.UUID,
        reference : {
          model: {
            tablesName: 'Users',
            schema: 'schema'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};