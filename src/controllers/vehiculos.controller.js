const vehiculos = require('../../data/vehiculos.json')

// lista todos los vehiculos
 const getAllvehiculos =  (req,res)=>{
    res.status(200).json(vehiculos)
}

const getVehiculosByPatente = (req, res) =>{
    const patente = req.params.patente
    const vehiculo =  vehiculos.filter(v => v.patente == patente)
    if(vehiculo != null){
        res.status(200).json(vehiculo)
    }else{
        res.status(404).json({ 
            mensaje : "no se encontro el vehiculo solicitado"
        })
    }
}

const modificacionVehiculo = (req , res) => {
    const patenteV = req.params.patente
    const vehiculoDatos = req.body
    const indexV = vehiculos.findIndex(v => v.patente== patenteV)
    if (indexV>0){
       vehiculos[indexV].patente = vehiculoDatos.patente
       if(vehiculoDatos.capacidad>0 && vehiculoDatos.capacidad<11){
          vehiculos[indexV].capacidad= vehiculoDatos.capacidad
          if(vehiculoDatos.autonomiaKms>0){
            vehiculos[indexV].autonomiaKms = vehiculoDatos.autonomiaKms
          res.status(200).json({mensaje: 'el vehiculos de modifico con exito'}) 
        }else{
            res.status(400).json({mensaje: 'la autonomia es invalida'}) 
          }
       }else{
        res.status(400).json({mensaje: 'la capacidad es invalida'}) 
       }
    }else{
        res.status(400).json({mensaje: 'no existe'}) 
    }

}

const nuevoVehiculo = (req, res) =>{

}


module.exports = {getAllvehiculos, getVehiculosByPatente,modificacionVehiculo,nuevoVehiculo}