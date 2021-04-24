'use strict';
const{qData} = require('../permdata');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', qData.map(row => {
    return{
        quizType:row.quizType,
        question:row.question,
        answer1:row.answer1,
        answer2:row.answer2,
        correctAnswer:row.correctAnswer,
        createdAt:new Date(),
        updatedAt:new Date()
    }
  

    }));
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
