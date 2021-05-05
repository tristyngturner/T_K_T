'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      answer1: {
        type: Sequelize.STRING
      },
      answer2: {
        type: Sequelize.STRING
      },
      answer3: {
        type: Sequelize.STRING
      },
      answer4: {
        type: Sequelize.STRING
      },
      answer5: {
        type: Sequelize.STRING
      },
      answer6: {
        type: Sequelize.STRING
      },
      answer7: {
        type: Sequelize.STRING
      },
      answer8: {
        type: Sequelize.STRING
      },
      answer9: {
        type: Sequelize.STRING
      },
      answer10: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Answers');
  }
};