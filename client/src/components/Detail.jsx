import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions';
import s from './Detail.module.css';

function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
}, [dispatch, id])


  const myPokemon = useSelector((state) => state.detail);

  return(
    <div className={s.container}>
      <Link to='/home'>
        <button>Volver</button>
      </Link>
        {
          myPokemon.length > 0 ?
          <div className={s.detailCard}>
            <div>
              <img className={s.pokeImg} src={myPokemon[0].image} alt="img not found" />
            </div>
            <div>
              <h1 className={s.pokemonName}>{myPokemon[0].name}</h1>
              <h2 className={s.pokemonType}>Tipos: {myPokemon[0].types.map((type) =>
                  typeof type === "object" ? type.name : type).join("/")}
              </h2>
              <p>ID: {myPokemon[0].id}</p>
              <p>Vida: {myPokemon[0].hp}</p>
              <p>Ataque: {myPokemon[0].attack}</p>
              <p>Defensa: {myPokemon[0].defense}</p>
              <p>Velocidad: {myPokemon[0].speed}</p>
              <p>Altura: {myPokemon[0].height}</p>
              <p>Peso: {myPokemon[0].weight}</p>
            </div>
          </div> :
          <p className={s.loading}>Cargando...</p>
        }
    </div>
  )
}


export default Detail;

// Este código es un componente de React llamado "Detail" que muestra los detalles de un Pokémon. El componente utiliza varias funciones y módulos de la biblioteca React, incluyendo el hook useEffect, useParams, useSelector, useDispatch, y Link.

// La función "useEffect" se utiliza para ejecutar una acción cada vez que cambia el estado de los componentes. En este caso, la acción que se ejecuta es "dispatch(getDetail(id))", que llama a la función "getDetail" importada desde "../actions" y pasa el parámetro "id". La función "getDetail" es una acción que obtiene los detalles del Pokémon desde una API y actualiza el estado de la aplicación utilizando Redux.

// La función "useSelector" es una función que permite acceder al estado global de la aplicación que se almacena en Redux y devuelve el objeto del estado llamado "detail". La constante "myPokemon" se inicializa con el valor del objeto "detail".

// El componente utiliza una condición ternaria para comprobar si los detalles del Pokémon se han cargado. Si es así, se muestra un div con la información detallada del Pokémon, incluyendo su imagen, nombre, tipos, ID, vida, ataque, defensa, velocidad, altura y peso. Si los detalles del Pokémon aún no se han cargado, se muestra el texto "Loading...".

// El componente también utiliza el módulo "react-router-dom" para agregar un botón "Volver" que redirige al usuario a la página principal del sitio web. El estilo del componente está definido en un archivo CSS llamado "Detail.module.css".


// El hook "useParams" es una función que se utiliza en React para acceder a los parámetros de la URL. Cuando una aplicación web utiliza React Router para manejar las rutas, la información que se encuentra en la ruta, como los IDs o los nombres de usuario, se pueden pasar como parámetros en la URL.

// La función "useParams" devuelve un objeto con los valores de los parámetros de la URL. Esto permite al desarrollador acceder a esos valores y utilizarlos en el componente. En el código proporcionado, el hook "useParams" se utiliza para obtener el parámetro "id" de la URL.

// En este caso, el valor de "id" se utiliza para llamar a la función "getDetail" y obtener los detalles del Pokémon correspondiente. En general, el hook "useParams" es útil cuando necesitamos acceder a los parámetros de la URL para mostrar información específica en nuestro componente, por ejemplo, para mostrar los detalles de un producto específico o una página de perfil de usuario.