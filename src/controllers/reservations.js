const bcrypt = require("bcrypt");
// const JWT = require("jsonwebtoken");
const { Reservation } = require("../model/Reservation");
const { User } = require("../model/User");

const reservationController = {
  getAllReservations: async (req, res) => {
    const reservations = await Reservation.findAll({
      order: [["date", "ASC"]]
    });
    return res.status(200).json({
      status: 200,
      reservations,
      message: null,
    });
  },

  createReservation: async (req, res) => {
    const reservationData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      document_type: req.body.document_type,
      document_number: req.body.document_number,
      date: req.body.date,
      type_reservation: req.body.type_reservation,
      number_people: req.body.number_people,
      description: req.body.description,
    }

    try {
      //* Create new Reservation
      await Reservation.create(reservationData);
      return res.status(200).json({
        status: 200,
        reservations: null,
        message: "Reservation successfully created",
      });
    } catch (error) {
      return res.status(403).json({
        status: 403,
        reservations: null,
        message: "We were unable to create the reservation" + error,
      });
    }


  },

  updateDataReservation: async (req, res) => {
    const reservationData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      document_type: req.body.document_type,
      document_number: req.body.document_number,
      date: req.body.date,
      type_reservation: req.body.type_reservation,
      number_people: req.body.number_people,
      description: req.body.description,
      id: req.body.id,
    }
    try {
      await Reservation.update(reservationData, {
        where: { id: reservationData.id },
      });
      return res.status(200).json({
        status: 200,
        reservations: null,
        message: "Reservation successfully updated",
      });
    } catch (error) {
      return res.status(403).json({
        status: 403,
        reservations: null,
        message: "We were unable to update the reservation",
      });
    }
  },

  changeStateOfAReservation: async (req, res) => {
    const { id, status } = req.body;
    try {
      await Reservation.update({ status }, {
        where: { id },
      });
      return res.status(200).json({
        status: 200,
        reservations: null,
        message: "The state of your reservation successfully updated",
      });
    } catch (error) {
      return res.status(403).json({
        status: 403,
        reservations: null,
        message: "We were unable to update the state of your reservation",
      });
    }

  },
}

module.exports = reservationController;