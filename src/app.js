//necesitamos llamar a la dependencia
const express = require('express')
//pregunto si tiene el puerto configurado o sino puerto default 
const PORT= process.env.PORT || 3002
const reservasRoute = require('../src/routes/reservas.route')
const vehiculosRoute =  require('../src/routes/vehiculos.route')
const app = express()
//para saber si el puerto esta escuchando.
app.listen(PORT,()=>{console.log("El puerto esta escuchando...")})

app.use("/api/reservas",reservasRoute)
app.use("/api/vehiculos", vehiculosRoute)
