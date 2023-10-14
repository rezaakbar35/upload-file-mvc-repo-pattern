const express = require('express')
const router = express.Router()

const pool = require('../config/database')
const controller = require('../controllers/usersController')

router.get('/', controller.readUsers)

router.get('/:id', controller.readUsersSpecific)

router.post('/', controller.createUsers);

router.put('/:id', controller.updateUsers);

router.delete('/:id', controller.deleteUsers);

module.exports = router