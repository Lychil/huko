const Router = require("express");
const router = new Router();
const eventController = require("../conrollers/event.controller");

router.post('/event/create', eventController.createEvent);
router.get('/event/all', eventController.getEvents);

module.exports = router;