const bcrypt = require("bcrypt");
// const JWT = require("jsonwebtoken");
const { Reservation } = require("../model/Reservation");
const { User } = require("../model/User");

const reservationController = {
  getAllReservations: async (req, res) => {
    const reservations = await Reservation.findAll({ include: User.scope('withoutPassword') });
    return res.status(200).json({
      status: 200,
      reservations,
    });
  },

  createUserAndReservation: async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
      document_type: req.body.document_type,
      document_number: req.body.document_number,
    }
    //* Create new User
    const [ user, created ] = await User.findOrCreate({
      where: { email: userData.email },
      defaults: userData
    });

    if(!created) {
      return res.status(400)
        .json({
          status: 403,
          message: "The user already exist"
        })
    }

    const reservationData = {
      date: req.body.date,
      type_reservation: req.body.type_reservation,
      number_people: req.body.number_people,
      description: req.body.description,
      userId: user.id,
    }

    //* Create new Reservation
    const reservation = await Reservation.create(reservationData);

    userData.id = user.id;
    delete userData.password;

    return res.status(200).json({
      status: 200,
      userData,
      reservation,
    });
  },

  updateDataUserAndReservation: async (req, res) => {
    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      document_type: req.body.document_type,
      document_number: req.body.document_number,
    }
    const user_id = req.body.user_id;

    //* Update User data
    await User.update(userData, {
      where: { id: user_id },
    });

    const reservationData = {
      date: req.body.date,
      type_reservation: req.body.type_reservation,
      number_people: req.body.number_people,
      description: req.body.description,
    }
    const reservationId = req.body.reservation_id;
    //* Update reservation data
    await Reservation.update(reservationData, {
      where: { id: reservationId },
    });
    return res.status(200).json({
      status: 200,
      message: "User and reservation has been updated",
    });
  },

  changeStateOfAReservation: async (req, res) => {
    const { id, status } = req.body;
    console.log({ id, status })
    // //* Update reservation status
    await Reservation.update({ status }, {
      where: { id },
    });
    return res.status(200).json({
      status: 200,
      message: "Status reservation has been updated",
    });
  },
}

module.exports = reservationController;