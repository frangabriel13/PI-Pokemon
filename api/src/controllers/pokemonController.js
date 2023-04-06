const axios  = require ('axios');
const { Pokemon, Type } = require('../db');


const getApiInfo = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    const apiNext = await axios.get(response.data.next);
    const allPokemons = response.data.results.concat(apiNext.data.results);
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
      })
    )
    return apiInfo;
  } catch (error) {
    console.log(error);
  }
};

const getDbInfo = async () => {
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

 const getAllInfo = async () => {
   try {
     const dbInfo = await getDbInfo();
     const apiInfo = await getApiInfo();
     const allInfo = dbInfo.concat(apiInfo);
     return allInfo;
   } catch (error) {
     console.log(error);
   }
 };


module.exports = {
   getAllInfo
}

// Para traerme todos los pokemones;
// let allPokemons = [];
    // let url = 'https://pokeapi.co/api/v2/pokemon';
    // const response = await axios.get(url);
    // allPokemons = allPokemons.concat(response.data.results);
    // let nextUrl = response.data.next;
    // while (nextUrl !== null) {
    //   const nextResponse = await axios.get(nextUrl);
    //   allPokemons = allPokemons.concat(nextResponse.data.results);
    //   nextUrl = nextResponse.data.next;
    // }

// _________________________________________________________________________________________________


// PROMESAS



// const axios = require('axios');
// const { Pokemon, Type } = require('../db');

// const getApiInfo = () => {
//   return axios.get(`https://pokeapi.co/api/v2/pokemon`)
//     .then((response) => {
//       return axios.get(response.data.next)
//       .then((apiNext) => {
//         const allPokemons = response.data.results.concat(apiNext.data.results)
//         return Promise.all(
//           allPokemons.map((el) => {
//             return axios.get(el.url)
//               .then((url) => {
//                 return {
//                   id: url.data.id,
//                   name: url.data.name,
//                   hp: url.data.stats[0].base_stat,
//                   attack: url.data.stats[1].base_stat,
//                   defense: url.data.stats[2].base_stat,
//                   speed: url.data.stats[5].base_stat,
//                   height: url.data.height,
//                   weight: url.data.weight,
//                   image: url.data.sprites.other.dream_world.front_default,
//                   types: url.data.types.map((t) => t.type.name),
//                 };
//               })
//           })
//         )
//       })
//     })
//     .catch((error) => {
//       console.log(error);
//     })
// };

// const getDbInfo = () => {
//   return Pokemon.findAll({
//     include: {
//       model: Type,
//       attributes: ["name"],
//       through: {
//         attributes: [],
//       },
//     },
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// };

// const getAllInfo = () => {
//   return Promise.all([getDbInfo(), getApiInfo()])
//     .then(([dbInfo, apiInfo]) => {
//       const allInfo = dbInfo.concat(apiInfo);
//       return allInfo;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// module.exports = {
//   getAllInfo,
// };