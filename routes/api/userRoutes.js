const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userName
router
  .route('/:userName')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
