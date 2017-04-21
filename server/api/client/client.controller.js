import client from './client.model'

/*ESTA FUNCION ES PARA LISTAR TODOS LOS CLIENTES*/
function getClients(req, res){
    client.find({})//aqui encuentra todos los registros posibles
      .exec(function(err, result){
            if(err){//pero si hay error mandara un error
              res.status(500).json(err)
            }else{//si no manda el resultado
              res.status(200).json(result)
            }
          })
  }

//ESTA FUNCION ES PARA CREAR UN NUEVO CLIENTE
function createClient(req, res){
  const clientData = req.body; //aqui obtiene los datos del request
  const clientAux = new client();//una instancia del modelo de BD

  clientAux.name = clientData.name;
  clientAux.lastName = clientData.lastName;
  clientAux.phoneNumber = clientData.phoneNumber;
  //pasamos todos los datos del modelo al objeto cliente
      clientAux.save()//guardamos los datos en la base
        .then(function(createdClient){//y entonces muestra el status
            res.status(200).json(createdClient)
        })

}



/*ESTA FUNCION ES PARA LISTAR UN SOLO CLIENTE*/
function getClient(req, res){
    const clientId = req.params.id;//guardamos el id que viene directamente del request
      client.findOne({//metodo para encontrar uno
          _id: clientId //en donde el id se iguala al id extraido
    }).exec(function(err, client){
          if(err)
            return res.status(500).send(err);
          if(!client)
            return res.status(404).send('Client Not Found');

          res.status(200).json(client)
        })
}

/*ESTA FUNCION ES PARA MODIFICAR UN SOLO CLIENTE*/
function updateClient(req, res){
    const clientId = req.params.id;
    const newParams = req.body;//variable que guarda los nuevos valores

      client.findOne({
          _id: clientId
    }).exec(function(err, client){
          if(err)
            return res.status(500).send(err);
          if(!client)
            return res.status(404).send('Pet Not Found');

        client.name = newParams.name;
        client.lastName = newParams.lastName;
        client.phoneNumber = newParams.phoneNumber;

        client.save()
            .then(function(createdClient){
                res.status(200).json(createdClient)
            })
      })
}

/*ESTA FUNCION ES PARA ELIMINAR UN SOLO CLIENTE*/
function destroyClient(req, res){
    const clientId = req.params.id;
    client.remove({//funcion para eliminar algo de la base de datos
          _id: clientId
    }).exec(function(err){
          if(err)
            return res.status(500).send(err);

          res.status(200).send('Client removed');
    })
}

module.exports = {
  getClients,
  createClient,
  getClient,
  updateClient,
  destroyClient,
};





