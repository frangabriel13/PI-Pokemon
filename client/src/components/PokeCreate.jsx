import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes } from '../actions';
import s from './PokeCreate.module.css';

function validate(input) {
  let errors = {};
  if(!input.name) {
    errors.name = 'Se requiere un nombre';
  } else if(!input.image) {
    errors.image = 'Se requiere una imagen';
  }
  return errors;
}

function PokeCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: '',
    image: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    type: []
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
    // console.log(input);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      type: [...input.type, e.target.value]
    })
    // console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postPokemon(input));
    alert('Pokémon creado correctamente');
    setInput({
      name: '',
      image: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      type: []
    })
    history.push('/home');
  }

  function handleDelete(el) {
    setInput({
      ...input,
      type: input.type.filter(t => t !== el)
    })
  }

  useEffect(() => {
    dispatch(getTypes());
  }, [])

  return(
    <div>
      <Link to='/home'><button>Volver</button></Link>
      <div className={s.container}>
      <h1>Crea tu pokémon</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre: </label>
          <input type="text" value={input.name} name='name' onChange={(e) => handleChange(e)} />
          {
            errors.name && (
              <p>{errors.name}</p>
            )
          }
        </div>
        <div>
          <label>Imagen: </label>
          <input type="text" value={input.image} name='image' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>HP: </label>
          <input type="number" value={input.hp} name='hp' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Ataque: </label>
          <input type="number" value={input.attack} name='attack' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Defensa: </label>
          <input type="number" value={input.defense} name='defense' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Velocidad: </label>
          <input type="number" value={input.speed} name='speed' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Height: </label>
          <input type="number" value={input.height} name='height' onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label>Weight: </label>
          <input type="number" value={input.weight} name='weight' onChange={(e) => handleChange(e)} />
        </div>
        <select onChange={(e) => handleSelect(e)}>
          {
            types.map((type) => (
              <option value={type.name}>{type.name}</option>
            ))
          }
        </select>
        
        <button type='submit'>Crear Pokémon</button>
        
      </form>
      <div className={s.deleteType}>
      {
        input.type.map(el => 
          <div className={s.deleteType2}>
            <p>{el}</p>
            <button onClick={() => handleDelete(el)}>x</button>
          </div>
        )
      }
      </div>
      </div>
    </div>
  )
}


export default PokeCreate;