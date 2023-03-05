const express = require("express");
// const { check } = require("express-validator");
const router = express.Router();
const reservationsController = require("../controllers/reservations");
const checkAuth = require("../middleware/checkAuth");

router.get("/", checkAuth, reservationsController.getAllReservations);
router.post("/", reservationsController.createReservation);
router.put("/", checkAuth, reservationsController.updateDataReservation);
router.put("/change-state", checkAuth, reservationsController.changeStateOfAReservation);


module.exports = router;