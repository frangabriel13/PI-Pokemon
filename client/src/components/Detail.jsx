import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions';

function Detail(props) {
  const dispatch = useDispatch();
  // const id = props.match.params.id;

  // console.log("ID:", id);
  const { id } = useParams();

  useEffect(() => {
    // console.log(props.match.params.id)
    // console.log(myPokemon);
    // console.log('ID:', props.match.params.id);
    // dispatch(getDetail(props.match.params.id));
    dispatch(getDetail(id));
    // console.log(props.match.params.id)
  // }, [dispatch, props.match.params.id])
}, [dispatch, id])


  const myPokemon = useSelector((state) => state.detail);
  // console.log(myPokemon);

  return(
    <div>
      {
        myPokemon.length > 0 ?
        <div>
          <h1>{myPokemon[0].name}</h1>
          <img src={myPokemon[0].image} alt="" />
          {/* <h2>Tipos: {!myPokemon[0].createdInDb ? 
            myPokemon[0].types + ' ' : 
            myPokemon[0].types.map(el => el.name + (' '))}
          </h2> */}
          <h2>Tipos: {Array.isArray(myPokemon[0].types)
          ? myPokemon[0].types.map((type) =>
              typeof type === "object" ? type.name : type
            ).join(", ")
          : myPokemon[0].types}
          </h2>
          <p>ID: {myPokemon[0].id}</p>
          <p>Vida: {myPokemon[0].hp}</p>
          <p>Ataque: {myPokemon[0].attack}</p>
          <p>Defensa: {myPokemon[0].defense}</p>
          <p>Velocidad: {myPokemon[0].speed}</p>
          <p>Altura: {myPokemon[0].height}</p>
          <p>Peso: {myPokemon[0].weight}</p>
        </div> :
        <p>Loading...</p>
      }
      <Link to='/home'>
        <button>Volver</button>
      </Link>
    </div>
  )
}


export default Detail;