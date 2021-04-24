'use strict';
const{qData} = require('../permdata');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', qData.map(row => {
      [{
        questionType:row.questionType,
        question:row.question,
        answer1:row.answer1,
        answer2:row.answer2,
        correctAnswer:row.correctAnswer
      }]

    }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
