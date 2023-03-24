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
  } 
  if(!input.image) {
    errors.image = 'Se requiere una imagen';
  }
  if(!input.hp || input.hp > 150 || input.hp < 0) {
    errors.hp = 'Se requiere un HP de entre 0 y 150';
  }
  if(!input.attack || input.attack > 150 || input.attack < 0) {
    errors.attack = 'Se requiere un ataque de entre 0 y 150';
  } 
  if(!input.defense || input.defense > 150 || input.hp < 0) {
    errors.defense = 'Se requiere una defensa de entre 0 y 150';
  }
  // console.log(errors);
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
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
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
    // console.log(input);
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
                <p className={s.error}>{errors.name}</p>
              )
            }
          </div>
          <div>
            <label>Imagen: </label>
            <input type="text" value={input.image} name='image' onChange={(e) => handleChange(e)} />
            {
              errors.image && (
                <p className={s.error}>{errors.image}</p>
              )
            }
          </div>
          <div>
            <label>HP: </label>
            <input type="number" value={input.hp} name='hp' onChange={(e) => handleChange(e)} />
            {
              errors.hp && (
                <p className={s.error}>{errors.hp}</p>
              )
            }
          </div>
          <div>
            <label>Ataque: </label>
            <input type="number" value={input.attack} name='attack' onChange={(e) => handleChange(e)} />
            {
              errors.attack && (
                <p className={s.error}>{errors.attack}</p>
              )
            }
          </div>
          <div>
            <label>Defensa: </label>
            <input type="number" value={input.defense} name='defense' onChange={(e) => handleChange(e)} />
            {
              errors.defense && (
                <p className={s.error}>{errors.defense}</p>
              )
            }
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
          <div>
            <select onChange={(e) => handleSelect(e)}>
              {
                types.map((type) => (
                  <option value={type.name}>{type.name}</option>
                ))
              }
            </select>
          </div>
          <button type='submit' disabled={Object.keys(errors).length > 0}>Crear Pokémon</button> 
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