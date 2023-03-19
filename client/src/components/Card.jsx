import React from 'react';

function Card({ image, name, types, id }) {
  return(
    <div>
      <h2>{id}</h2>
      <img src={image} alt="img not found" />
      <h3>{name}</h3>
      <h5>
      {Array.isArray(types)
          ? types.map((type) =>
              typeof type === "object" ? type.name : type
            ).join(", ")
          : types}
  {/* Usamos el método Array.isArray() para verificar si types es un array o no. Si es un array, entonces mapeamos los elementos del array y comprobamos si cada elemento es un objeto o no. Si es un objeto, renderizamos el nombre del tipo; de lo contrario, renderizamos el tipo. Luego usamos el método join() para unir los tipos en una sola cadena con una coma y un espacio entre cada tipo. Si types no es un array, simplemente lo renderizamos. Puede ser que no haga falta el Array.isArray porque son todos arrays. */}
      </h5>
    </div>
  )
}




export default Card;