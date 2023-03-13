const axios  = require ('axios');
const { Pokemon, Type } = require('../db');


const getDBInfo = async () => {
   try {
      return await Pokemon.findAll({
         include: {
            model: Type,
            attributes: ["name"],
            through: {
               attributes: [],
            },
         },
      });
   } catch(error) {
      console.log(error);
   } 
}

const getInfo = async () => {
   try {
     // aca me traigo todos los 40 pokemones
     const apiResults = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
     const apiNext = await axios.get(apiResults.data.next);
     const allPokemons = apiResults.data.results.concat(apiNext.data.results);
     const apiInfo = await Promise.all(
      allPokemons.map(async (el) => {
         let url = await axios.get(el.url);
         return {
            id: url.data.id,
            name: url.data.name,
            hp: url.data.stats[0].base_stat,
            attack: url.data.stats[1].base_stat,
            defense: url.data.stats[2].base_stat,
            speed: url.data.stats[5].base_stat,
            height: url.data.height,
            weight: url.data.weight,
            image: url.data.sprites.other.dream_world.front_default,
            types: url.data.types.map((t) => t.type.name),
         }
     }))
     return apiInfo;
   } catch (error) {
     console.log(error);
   }
 };

 const getAllInfo = async () => {
   try {
     const dbInfo = await getDBInfo();
     const apiInfo = await getInfo();
     const allInfo = dbInfo.concat(apiInfo);
     return allInfo;
   } catch (error) {
     console.log(error);
   }
 };

module.exports = {
   getAllInfo
}