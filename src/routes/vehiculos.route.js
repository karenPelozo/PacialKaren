const express = require('express')
const routeVehiculos = express.Router()
 const  controllersVehiculos = require('../controllers/vehiculos.controller')

 routeVehiculos.get("/",controllersVehiculos.getAllvehiculos)
 routeVehiculos.get("/:patente",controllersVehiculos.getVehiculosByPatente)
 routeVehiculos.post("/",controllersVehiculos.nuevoVehiculo)

 module.exports = routeVehiculos