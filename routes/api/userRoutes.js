const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userName
router
  .route('/:userName')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userName/friends/:friendName').post(addFriend);
router.route('/:userName/friends/:friendName').delete(removeFriend);
module.exports = router;
