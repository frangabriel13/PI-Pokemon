import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, filterByType, filterCreated, orderByName, orderByAttack } from '../actions';
import { Link } from 'react-router-dom';
import Card from './Card';
import Paginado from './Paginado';
import SearchBar from './SearchBar';
import s from './Home.module.css';


function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(1); //setea la página actual en 1
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12); //setea la cant de pj por página en 12
  const indexOfLastPokemon = currentPage * pokemonsPerPage; //1*12=12  2*12=24 índice del primer pj de next page
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; //12-12=0 24-12=12
  const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon); //recorto el array
  const [orden, setOrden] = useState('');


  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    dispatch(getPokemons());
  }, [])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }
 
  function handleFilterType(e) {
    dispatch(filterByType(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    // setOrden(`Ordenado ${e.target.value}`);
    setOrden(`${e.target.value}`);
  }

  function handleSortAtt(e) {
    e.preventDefault();
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    // setOrden(`Ordenado ${e.target.value}`);
    setOrden(`${e.target.value}`);
  }


  return(
    <div>
      <h1 className={s.title}>PI-Pokémon</h1>
      <Link to='/pokemons'>
        <button>Crear pokémon</button>
      </Link>
      <button onClick={e => {handleClick(e)}}>Volver a cargar todos los pokémons</button>
      <div className={s.selectors}>
        <select onChange={e => handleSort(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select onChange={e => handleSortAtt(e)}>
          <option value="max">Mayor ataque</option>
          <option value="min">Menor ataque</option>
        </select>
        <select onChange={e => handleFilterType(e)}>
          <option value="All">Todos</option>
          <option value="normal">Normal</option>
          <option value="ghost">Ghost</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="poison">Poison</option>
          <option value="bug">Bug</option>
          <option value="psychic">Psychic</option>
          <option value="unknown">Unknown</option>
          <option value="flying">Flying</option>
          <option value="steel">Steel</option>
          <option value="grass">Grass</option>
          <option value="dark">Dark</option>
          <option value="fighting">Fighting</option>
          <option value="rock">Rock</option>
          <option value="water">Water</option>
          <option value="dragon">Dragon</option>
          <option value="ground">Ground</option>
          <option value="fire">Fire</option>
          <option value="ice">Ice</option>
          <option value="shadow">Shadow</option>
        </select>
        <select onChange={e => handleFilterCreated(e)}>
          <option value="All">Todos</option>
          <option value="created">Creados</option>
          <option value="api">Existentes</option>
        </select>
        
        <SearchBar />
        <div className={s.pokemonGrid}>
          {
            currentPokemons?.map(el => {
              return(
                <Fragment>
                  {/* {console.log(el.id)} */}
                  <Link className={s.link} to={'/pokemons/' + el.id}>
                    <Card className={s.cardContainer} name={el.name} image={el.image} types={el.types} id={el.id} attack={el.attack} 
                      key={el.id} />
                  </Link>
                </Fragment>
              )
            })
          }
        </div>
        <Paginado 
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginado={paginado}
        />
      </div>
    </div>
  )
}


export default Home;