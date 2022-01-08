'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
      {
        id: "eb403876-350d-42e9-9538-c5f12e95a52e",
        title: "Mes News",
        content: "Très content de partir en Australie !",
        date: new Date(),
        userId: "8b70f754-b53a-41fd-a7f4-53562af7e52b",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "4df182c4-7fa3-4643-b9b9-febd734d8a84",
        title: "Les News de Lennon",
        content: "Très content de partir en France !",
        date: new Date(),
        userId: "bb7f5a93-3b4f-42a3-a793-2c035e45289c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "ca3c6353-720d-4fab-a706-751577ec83d5",
        title: "Les News de Sandrine",
        content: "Très contente de partir au Mexique !",
        date: new Date(),
        userId: "1e629ad4-f0a8-49c0-b73b-406cf5baf87c",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
