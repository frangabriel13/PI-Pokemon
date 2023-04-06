import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css';

function LandingPage() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Bienvenidos al PI-Pokémon</h1>
      <Link to='/home'>
        <button className={s.button}>Ingresar</button>
      </Link>
    </div>
  )
}


export default LandingPage;






// ____________________________________________________________________

// componente de clase


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import s from './LandingPage.module.css';

// class LandingPage extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className={s.container}>
//         <h1 className={s.title}>Bienvenidos al PI-Pokémon</h1>
//         <Link to='/home'>
//           <button className={s.button}>Ingresar</button>
//         </Link>
//       </div>
//     );
//   }
// }

// export default LandingPage;