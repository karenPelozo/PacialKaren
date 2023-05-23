 const express = require('express')

 const routeReservas = express.Router()
 const controllersReserva = require('../controllers/reservas.controller')

 routeReservas.get("/",controllersReserva.getAllReservas)
 routeReservas.get("/:id",controllersReserva.getReservaByID)
 routeReservas.delete("/:id",controllersReserva.deleteByID)
 routeReservas.post("/",controllersReserva.registraReserva)

 module.exports = routeReservas

 