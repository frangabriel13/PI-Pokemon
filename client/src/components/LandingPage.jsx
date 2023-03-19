import React from 'react';
import { Link } from 'react-router-dom';
import s from './LandingPage.module.css';

function LandingPage() {
  return (
    <div>
      <h1 className={s.title}>Bienvenidos al PI-Pokémon</h1>
      <Link to='/home'>
        <button>Ingresar</button>
      </Link>
    </div>
  )
}


export default LandingPage;