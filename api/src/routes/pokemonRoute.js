const { Router } = require('express');
const { getAllInfo, getByName } = require('../controllers/pokemonController');
const { Pokemon, Type } = require('../db');


const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  let pokemonTotal = await getAllInfo();
  try {
    if (name) {
      const pokeName = await pokemonTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
      pokeName.length ?
      res.status(200).send(pokeName) :
      res.status(404).send('No existe el pokemon')
    } else {
      res.status(200).send(pokemonTotal);
    }
  } catch (error) {
    res.status(400).json({ msg: "No se encontro el pokemon solicitado" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const pokemonTotal = await getAllInfo();
  try {
    // const allPokemonsId = await getAllInfo();
    if (id) {
      const filterId = await pokemonTotal.filter((e) => e.id == id);
      filterId.length ?
      res.status(200).send(filterId) :
      res.status(404).send('No se encontró')
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  let {
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    type,
    createdInDb,
  } = req.body;
  try {
        let createPokemon = await Pokemon.create({
          name,
          image,
          hp,
          attack,
          defense,
          speed,
          height,
          weight,
          createdInDb,
        });
        let typeofPokemon = await Type.findAll({ where: { name: type } });
        createPokemon.addType(typeofPokemon);
        res.status(200).send("El pokemon fue creado con exito");
      } catch (error) {
    console.log(error);
  }
});



module.exports = router;