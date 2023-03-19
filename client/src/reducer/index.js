const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: []
}

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload
      }
    case 'GET_TYPES':
      return {
        ...state,
        types: action.payload
      }
    case 'POST_POKEMON':
      return {
        ...state
      }
    case 'FILTER_BY_TYPE':
      const allPokemons = state.allPokemons;
      const typeFiltered = action.payload === 'All' ? 
        allPokemons : 
        // allPokemons.filter(el => el.types.includes(action.payload));
        allPokemons.filter(el => el.types.some(t => t.name === action.payload || t === action.payload));
        // se utiliza el método some() para verificar si el array de objetos types contiene algún objeto con la propiedad name igual a action.payload, o si el array de strings types contiene algún string igual a action.payload. De esta manera, se pueden filtrar los pokemones correctamente independientemente de la estructura del array types.
        // console.log(typeFiltered);
      return {
        ...state,
        pokemons: typeFiltered
      }
    case 'FILTER_CREATED':
      const createdFiltered = action.payload === 'created' ? 
      state.allPokemons.filter(el => el.createInDb) :
      state.allPokemons.filter(el => !el.createInDb)
      return {
        ...state,
        pokemons: action.payload === 'All' ? state.allPokemons : createdFiltered
      }
    case 'ORDER_BY_NAME':
      let sortedArr = action.payload === 'asc' ?
      state.pokemons.sort(function(a, b) {
        if(a.name > b.name) return 1;
        if(b.name > a.name) return -1;
        return 0;
      }) :
      state.pokemons.sort(function(a, b) {
        if(a.name > b.name) return -1;
        if(b.name > a.name) return 1;
        return 0;
      })
      return {
        ...state,
        pokemons: sortedArr
      }
    case 'ORDER_BY_ATTACK':
      let sortedAtt = action.payload === 'max' ?
      state.pokemons.sort(function(a, b) {
        if(a.attack > b.attack) return -1;
        if(b.attack > a.attack) return 1;
        return 0;
      }) :
      state.pokemons.sort(function(a, b) {
        if(a.attack > b.attack) return 1;
        if(b.attack > a.attack) return -1;
        return 0;
      })
      return {
        ...state,
        pokemons: sortedAtt
      }
    case 'GET_NAME_POKEMON':
      return {
        ...state,
        pokemons: action.payload
      }
    case 'GET_DETAIL':
      return {
        ...state,
        detail: action.payload
      }
    default: return state;
  }
}


export default rootReducer;