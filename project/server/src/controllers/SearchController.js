const Dev = require('../models/Dev')
const parseStringAsArray = require('./utils/parseStringAsArray');

//Buscar todos devs em um raio de 10km
//Filtrar por tecnologias 
module.exports = {
  async index(request, response){
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);
    
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coodnates: [longitude, latitude],
          },
          $maxDistance: 10000,
        }
      },
    });
    
    console.log(techsArray);
    
    return response.json({ devs });
  }
}