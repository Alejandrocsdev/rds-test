const { User } = require('../models')

const bcryptjs = require('bcryptjs')

class AuthController {
  signUp = async (req, res, next) => {
    const { username, password, passwordCheck, gender } = req.body
    const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`
    const hashedPassword = await bcryptjs.hash(password, 10)
    await User.create({
      username,
      password: hashedPassword,
      gender,
      avatar: gender === 'male' ? boyAvatar : girlAvatar
    })
    res.status(200).json({ message: 'User registered successfully.' })
  }

  signIn = async (req, res, next) => {
    const port = process.env.PORT
    const test = process.env.TEST
    const password = process.env.PASSWORD
    res.status(200).json({ port, test, password })
  }

  signOut = async (req, res, next) => {
    // const users = await User.findAll()
    // res.status(200).json(users)
  }
}

module.exports = new AuthController()
