'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: "8b70f754-b53a-41fd-a7f4-53562af7e52b",
        lastname: "Lecomte",
        firstname: "Dylan",
        email: "lecomtedylan@rocketmail.com",
        username: "Prototype91",
        link: "https://github.com/Prototype91/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "bb7f5a93-3b4f-42a3-a793-2c035e45289c",
        lastname: "Lecomte",
        firstname: "Lennon",
        email: "lecomtelennon@rocketmail.com",
        username: "Prototype92",
        link: "https://github.com/Prototype91/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "1e629ad4-f0a8-49c0-b73b-406cf5baf87c",
        lastname: "Lecomte",
        firstname: "Sandrine",
        email: "lecomtesandrine@rocketmail.com",
        username: "Prototype93",
        link: "https://github.com/Prototype91/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
