const axios  = require ('axios');
const { Type } = require('../db');


const onlyAllTypes = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const allTypes = response.data.results.map((el) => el.name);
      return allTypes;
    } catch (error) {
      console.log(error);
    }
  };

  const saveAllTypes = async () => {
    try {
      const types = await onlyAllTypes();
      types.forEach(type => {
        Type.findOrCreate({ where: { name: type } });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTypes = async () => {
    try {
      const save = await saveAllTypes();
      const allTypes = await Type.findAll();
      return allTypes;
    } catch (error) {
      console.log(error);
    }
  };


module.exports = getAllTypes;




// __________________________________________________________________________________

// PROMESAS


// const axios = require('axios');
// const { Type } = require('../db');

// const onlyAllTypes = () => {
//   return axios.get('https://pokeapi.co/api/v2/type')
//     .then((response) => {
//       const allTypes = response.data.results.map((el) => el.name);
//       return allTypes;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const saveAllTypes = () => {
//   return onlyAllTypes()
//     .then((types) => {
//       types.forEach((type) => {
//         Type.findOrCreate({ where: { name: type } });
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const getAllTypes = () => {
//   return saveAllTypes()
//     .then(() => {
//       return Type.findAll();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// module.exports = getAllTypes;