import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNamePokemon } from '../actions';
import s from './SearchBar.module.css';

function SearchBar(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    // console.log(name);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setCurrentPage(1);
    dispatch(getNamePokemon(name));
    // console.log(name);
  }

  return(
    <div>
      <input className={s.input} type="text" placeholder='Buscar...' onChange={e => handleInputChange(e)} />
      <button type='submit' onClick={e => handleSubmit(e)}>Buscar</button>
    </div>
  )
}


export default SearchBar;









// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getNamePokemon } from '../actions';
// import s from './SearchBar.module.css';

// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: ''
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(e) {
//     e.preventDefault();
//     this.setState({ name: e.target.value });
//     // console.log(name);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.props.dispatch(getNamePokemon(this.state.name));
//   }

//   render() {
//     return(
//       <div>
//         <input className={s.input} type="text" placeholder='Buscar...' onChange={e => this.handleInputChange(e)} />
//         <button type='submit' onClick={e => this.handleSubmit(e)}>Buscar</button>
//       </div>
//     );
//   }
// }

// export default connect()(SearchBar);