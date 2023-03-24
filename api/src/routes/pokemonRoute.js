const { Router } = require('express');
const { getAllInfo } = require('../controllers/pokemonController');
const { Pokemon, Type } = require('../db');


const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  let pokemonTotal = await getAllInfo();
  try {
    if(name) {
      const pokeName = await pokemonTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
      pokeName.length ?
      res.status(200).send(pokeName) :
      res.status(404).send('No existe ningún pokemon con el nombre indicado')
    } else {
      res.status(200).send(pokemonTotal);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const pokemonTotal = await getAllInfo();
  try {
    if(id) {
      const pokeId = await pokemonTotal.filter(el => el.id == id);
      pokeId.length ?
      res.status(200).send(pokeId) :
      res.status(404).send('No se encontró ningún pokemon con el ID indicado')
    }
  } catch (error) {
    console.log(error);
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
        let pokeType = await Type.findAll({ where: { name: type } });
        createPokemon.addType(pokeType);
        res.status(200).send("El pokemon fue creado con éxito");
      } catch (error) {
    console.log(error);
  }
});



module.exports = router;





// ______________________________________________________________________________

// PROMESAS



// const { Router } = require('express');
// const { getAllInfo } = require('../controllers/pokemonController');
// const { Pokemon, Type } = require('../db');

// const router = Router();

// router.get("/", (req, res) => {
//   const name = req.query.name;
//   getAllInfo()
//     .then((pokemonTotal) => {
//       if (name) {
//         const pokeName = pokemonTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
//         pokeName.length ?
//           res.status(200).send(pokeName) :
//           res.status(404).send('No existe ningún pokemon con el nombre indicado')
//       } else {
//         res.status(200).send(pokemonTotal);
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   getAllInfo()
//     .then((pokemonTotal) => {
//       if (id) {
//         const pokeId = pokemonTotal.filter(el => el.id == id);
//         pokeId.length ?
//           res.status(200).send(pokeId) :
//           res.status(404).send('No se encontró ningún pokemon con el ID indicado')
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// router.post("/", (req, res) => {
//   let {
//     name,
//     image,
//     hp,
//     attack,
//     defense,
//     speed,
//     height,
//     weight,
//     type,
//     createdInDb,
//   } = req.body;

//   Pokemon.create({
//     name,
//     image,
//     hp,
//     attack,
//     defense,
//     speed,
//     height,
//     weight,
//     createdInDb,
//   })
//     .then((createPokemon) => {
//       Type.findAll({ where: { name: type } })
//         .then((pokeType) => {
//           createPokemon.addType(pokeType);
//           res.status(200).send("El pokemon fue creado con éxito");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// module.exports = router;