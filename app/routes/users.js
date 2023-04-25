const express = require('express')
const router = express.Router()
//const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/users')
const { validateCreate } = require('../validators/users')

router.get('/', getItems)

router.get('/:id',checkAuth, checkRoleAuth(['Validador']), getItem)

router.post('/',checkAuth,validateCreate, createItem)

router.patch('/:id',checkAuth, updateItem)

router.delete('/:id', checkAuth, deleteItem)

module.exports = router