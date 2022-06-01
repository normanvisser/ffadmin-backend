'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('user_groups', [{
       id: 1,
       userId: 1,
       groupId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('user_groups', null, {});
     
  }
};
