import axios from 'axios';

export function getPokemons() {
  return async function(dispatch) {
    let json = await axios.get('http://localhost:3001/pokemons');
    // console.log(json)
    return dispatch({
      type: 'GET_POKEMONS',
      payload: json.data
    })
  }
}

export function getTypes() {
  return async function(dispatch) {
    let json = await axios.get('http://localhost:3001/types');
    return dispatch({
      type: 'GET_TYPES',
      payload: json.data
    })
  }
}

export function postPokemon(payload) {
  return async function(dispatch) {
    let response = await axios.post('http://localhost:3001/pokemons', payload);
    console.log(response);
    return response;
  }
}

export function filterByType(payload) {
  // console.log(payload);
  return {
    type: 'FILTER_BY_TYPE',
    payload
  }
}

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload
  }
}

export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload
  }
}

export function orderByAttack(payload) {
  return {
    type: 'ORDER_BY_ATTACK',
    payload
  }
}

export function getNamePokemon(name) {
  return async function(dispatch) {
    try {
      let json = await axios.get('http://localhost:3001/pokemons?name=' + name);
      return dispatch({
        type: 'GET_NAME_POKEMON',
        payload: json.data
      })
    } catch(error) {
      console.log(error);
    }
  } 
}

export function getDetail(id) {
  return async function(dispatch) {
    try {
      let json = await axios.get('http://localhost:3001/pokemons/' + id);
      return dispatch({
        type: 'GET_DETAIL',
        payload: json.data
      })
    } catch(error) {
      console.log(error);
    }
  }
}