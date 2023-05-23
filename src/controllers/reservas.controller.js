    const reservas = require('../../data/reservas.json')
    
    //lista todas las reservas
    const getAllReservas =  (req,res)=>{
        res.status(200).json(reservas)
    }

    //pasar reserva por id

    const getReservaByID = (req, res) =>{
        const id = req.params.id
        const reserva =  reservas.filter(r => r.id == id)
        if(reserva != null){
            res.status(200).json(reserva)
        }else{
            res.status(404).json({ 
                mensaje : "no se encontro la reserva solicitada"
            })
        }
    }

    const deleteByID = (req , res)=>{
        const id = req.params.id
        const indexRes = reservas.findIndex(reserva => reserva.id == id)
       
        if(indexRes>=0){
            reservas.splice(indexRes,1)
            res.status(200).json({mensaje : 'se borro correctamente'})
        }else{
            res.status(404).json({ 
                mensaje : "esta reserva no existe"
            })
        }
    }

    const registraReserva = (req , res) =>{
// busco el maximo id y le sumo uno
        //hago una lista de ids
        const nomClie = req.body.nombre
        const distanciar= req.params.distancia 
        const personasr= req.body.cantPersonas
        const fechar = req.body.fecha
        const idsReserva = reservas.map( i => i.id)
        const maxID = reservas.reduce( (id1, id2) =>{ id1 > id2 ? id1 : id2} )
        if(personas>0 && personas< 10)
        { if(distancia>0 && distancia< 500)
            { 
                reservas.push({ 
                id: maxID+1,
                cliente: nomClie,
                cantPersonas: personas,
                distancia: distanciar,
                fecha: fechar,

            })
            }else{
                res.status(404).json({mensaje : 'no se cumplio una de las condiciones'})
            }
            
        }else{
            res.status(404).json({mensaje : 'no se cumplio una de las condiciones'})
        }

    }

    module.exports = {getAllReservas , getReservaByID,deleteByID, registraReserva}