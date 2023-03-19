import React from 'react';

function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
  const pageNumbers = [];
  for(let i = 0; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  return(
    <nav>
      <ul>
        {
          pageNumbers && pageNumbers.map(n => (
            <li key={n}>
              <a onClick={() => paginado(n)}>{n}</a> 
            </li>
          ))
        }
      </ul>
    </nav>
  )
}


export default Paginado;