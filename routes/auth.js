const { Router } = require('express')
const router = Router()

const { authController } = require('../controllers')

router.post('/signUp', authController.signUp)
router.get('/signIn', authController.signIn)
router.post('/signOut', authController.signOut)

module.exports = router
