import React from 'react';
import s from './Paginado.module.css';

function Paginado({ pokemonsPerPage, allPokemons, paginado }) {
  const pageNumbers = [];
  for(let i = 0; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i + 1)
  }

  return(
    <nav className={s.nav}>
      <ul className={s.ul}>
        {
          pageNumbers && pageNumbers.map(n => (
            <li className={s.li} key={n}>
              <a className={s.a} onClick={() => paginado(n)}>{n}</a> 
            </li>
          ))
        }
      </ul>
    </nav>
  )
}


export default Paginado;