const { Router } = require('express');
const getAllTypes = require('../controllers/typeController');

const router = Router();

router.get("/", async (req, res) => {
   try {
     const allTypes = await getAllTypes();
     res.send(allTypes);
   } catch (error) {
     console.log(error);
   }
 });


module.exports = router;





// __________________________________________________



// PROMESAS


// const { Router } = require('express');
// const getAllTypes = require('../controllers/typeController');

// const router = Router();

// router.get("/", (req, res) => {
//   getAllTypes()
//     .then(allTypes => {
//       res.send(allTypes);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// module.exports = router;