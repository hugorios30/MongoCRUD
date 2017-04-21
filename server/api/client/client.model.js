import mongoose, {Schema} from 'mongoose' //importamos la libreria de mongoose para usar mongoDB

var ClientSchema = new Schema(
  {
    name: String,
    lastName: String,
    phoneNumber: String
  }
);//se crea el schema y sus campos

export default mongoose.model('client',ClientSchema);

/*
* AQUI SE CREA EL MODELO DE BASE DE DATOS, CREANDO UN SCHEMA
* Y PONIENDO SUS CAMPOS, PARA POSTERIORMENTE EXPORTARLO PARA SU USO
* */



