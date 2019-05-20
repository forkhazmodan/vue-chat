const { Router } = require('express')
const router = Router()
const chatController = require('../controllers').chat
const usersController = require('../controllers').users

 /* User Controller */
router.get('/users', usersController.list)
router.post('/sign-in', usersController.signIn)
router.post('/sign-up', usersController.signUp)

/* Chat Router */
router.get('/chat', chatController.list)
router.post('/chat/create', chatController.create)

module.exports = router
