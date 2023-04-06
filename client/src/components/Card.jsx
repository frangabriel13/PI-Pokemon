import React from 'react';
import s from './Card.module.css';

function Card({ image, name, types, attack, id }) {
  return(
    <div className={s.card}>
      <img className={s.imageCard} src={image} alt="img not found" />
      <h3 className={s.cardName}>{name}</h3>
      <h5 className={s.pokeTypes}>
        {
          types.map((type) =>
            typeof type === "object" ? type.name : type
          ).join("/") 
        }
      </h5>
      <h5 className={s.pokeTypes}>{attack}</h5>
    </div>
  )
}




export default Card;





// import React, { Component } from 'react';
// import s from './Card.module.css';

// class Card extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     const { image, name, types, id } = this.props;
    
//     return (
//       <div className={s.card}>
//         <img className={s.imageCard} src={image} alt="img not found" />
//         <h3 className={s.cardName}>{name}</h3>
//         <h5 className={s.pokeTypes}>
//           {
//             types.map((type) =>
//               typeof type === "object" ? type.name : type
//             ).join("/") 
//           }
//         </h5>
//       </div>
//     )
//   }
// }

// export default Card;