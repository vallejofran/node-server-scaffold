const { Router } = require('express');
const router = Router();

const {createUser, getUsers, getUserById} = require('../controllers/user-mogno-example');

router.post('/create-user', createUser)
router.get('/', getUsers)
router.get('/:id', getUserById)


module.exports = router;