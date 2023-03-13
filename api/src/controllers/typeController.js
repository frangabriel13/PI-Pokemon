const axios  = require ('axios');
const { Pokemon, Type } = require('../db');

const onlyAllTypes = async () => {
    try {
      const types1 = await axios.get("https://pokeapi.co/api/v2/type");
      const types2 = types1.data.results;
      const onlyTypes = types2.map((el) => el.name);
      return onlyTypes;
    } catch (error) {
      console.log(error);
    }
  };

  const saveAllTypes = async () => {
    try {
      const types = await onlyAllTypes();
      types.forEach((type) => {
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