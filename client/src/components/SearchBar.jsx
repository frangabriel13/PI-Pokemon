import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemon } from '../actions';
import s from './SearchBar.module.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    // console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNamePokemon(name));
    // setName('');
  }

  return(
    <div>
      <input className={s.input} type="text" placeholder='Buscar...' onChange={e => handleInputChange(e)} />
      <button type='submit' onClick={e => handleSubmit(e)}>Buscar</button>
    </div>
  )
}


export default SearchBar;