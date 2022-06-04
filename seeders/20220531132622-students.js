"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          ref: "INB/Ned/220501",
          firstName: "Jim",
          initials: "J",
          lastName: "Carrey",
          gender: "male",
          bsn: 46378828,
          dateOfBirth: "11-01-1992",
          contractSigned: true,
          startingDate: new Date(2022, 1, 1),
          webCode: "n0id3a",
          extension: true,
          status: "Stopped",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ref: "INB/Ned/220501",
          firstName: "Morgan",
          initials: "M.G.E.",
          lastName: "Freeman",
          gender: "male",
          bsn: 46378828,
          dateOfBirth: "11-01-1992",
          contractSigned: true,
          startingDate: new Date(2022, 1, 1),
          webCode: "n0id3a",
          extension: false,
          status: "On-Hold",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ref: "INB/Ned/220501",
          firstName: "Britney",
          initials: "B",
          lastName: "Spears",
          gender: "female",
          bsn: 46378828,
          dateOfBirth: "11-01-1992",
          contractSigned: true,
          startingDate: new Date(2022, 1, 1),
          webCode: "n0id3a",
          extension: true,
          status: "Active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          ref: "INB/Ned/220501",
          firstName: "Roger",
          initials: "R",
          lastName: "Rabbit",
          gender: "male",
          bsn: 46378828,
          dateOfBirth: "11-01-1992",
          contractSigned: true,
          startingDate: new Date(2022, 1, 1),
          webCode: "n0id3a",
          extension: false,
          status: "Finished",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("students", null, {});
  },
};
