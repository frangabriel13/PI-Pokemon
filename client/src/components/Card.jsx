import React from 'react';
import s from './Card.module.css';

function Card({ image, name, types, id }) {
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
{/* Mapeamos los elementos del array y comprobamos si cada elemento es un objeto o no. Si es un objeto, renderizamos el nombre del tipo; de lo contrario, renderizamos el tipo. Luego usamos el método join() para unir los tipos en una sola cadena con barra. */}
      </h5>
    </div>
  )
}




export default Card;