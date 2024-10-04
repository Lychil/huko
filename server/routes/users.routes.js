const Router = require("express");
const router = new Router();
const usersController = require("../conrollers/users.controller");

router.post('/users/create', usersController.createUser);
router.post('/users/check', usersController.isUser);
router.get('/users/auth', usersController.isAuth);

module.exports = router;