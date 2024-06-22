'use strict'

/** @type {import('sequelize-cli').Migration} */

const data = []

data.push({
  username: 'root',
  password: '12345678',
  gender: 'male',
  avatar: 'https://avatar.iran.liara.run/public/boy?username=root'
})
data.push({
  username: 'user1',
  password: '12345678',
  gender: 'female',
  avatar: 'https://avatar.iran.liara.run/public/girl?username=user1'
})

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', data)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null)
  }
}
