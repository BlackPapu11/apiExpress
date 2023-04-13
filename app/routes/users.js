const express = require('express')
const router = express.Router()
//const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/users')

router.get('/',checkAuth,checkRoleAuth(['user']), getItems)

router.get('/:id',checkAuth, checkRoleAuth(['admin']), getItem)

router.post('/',checkAuth, createItem)

router.patch('/:id',checkAuth, updateItem)

router.delete('/:id', checkAuth, deleteItem)

module.exports = router