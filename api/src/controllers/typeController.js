const axios  = require ('axios');
const { Pokemon, Type } = require('../db');

const onlyAllTypes = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const types = response.data.results;
      // console.log(types);
      // const allTypes = types.map((el) => el.name);
      const allTypes = response.data.results.map((el) => el.name);
      return allTypes;
    } catch (error) {
      console.log(error);
    }
  };

  const saveAllTypes = async () => {
    try {
      const types = await onlyAllTypes();
      // console.log(types)
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