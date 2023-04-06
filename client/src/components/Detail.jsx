import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions';
import s from './Detail.module.css';

function Detail(props) {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id])


  const myPokemon = useSelector((state) => state.detail);

  return(
    <div className={s.container}>
      <Link to='/home'>
        <button>Volver</button>
      </Link>
        {
          myPokemon.length > 0 ?
          <div className={s.detailCard}>
            <div>
              <img className={s.pokeImg} src={myPokemon[0].image} alt="img not found" />
            </div>
            <div>
              <h1 className={s.pokemonName}>{myPokemon[0].name}</h1>
              <h2 className={s.pokemonType}>Tipos: {myPokemon[0].types.map((type) =>
                  typeof type === "object" ? type.name : type).join("/")}
              </h2>
              <p>ID: {myPokemon[0].id}</p>
              <p>Vida: {myPokemon[0].hp}</p>
              <p>Ataque: {myPokemon[0].attack}</p>
              <p>Defensa: {myPokemon[0].defense}</p>
              <p>Velocidad: {myPokemon[0].speed}</p>
              <p>Altura: {myPokemon[0].height}</p>
              <p>Peso: {myPokemon[0].weight}</p>
            </div>
          </div> :
          <p className={s.loading}>Cargando...</p>
        }
    </div>
  )
}


export default Detail;








// import React, { Component } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getDetail } from '../actions';
// import s from './Detail.module.css';

// class Detail extends Component {
//   componentDidMount() {
//     const { id } = this.props.match.params;
//     this.props.getDetail(id);
//   }

//   render() {
//     const { myPokemon } = this.props;

//     return (
//       <div className={s.container}>
//         <Link to='/home'>
//           <button>Volver</button>
//         </Link>
//         {
//           myPokemon.length > 0 ?
//           <div className={s.detailCard}>
//             <div>
//               <img className={s.pokeImg} src={myPokemon[0].image} alt="img not found" />
//             </div>
//             <div>
//               <h1 className={s.pokemonName}>{myPokemon[0].name}</h1>
//               <h2 className={s.pokemonType}>Tipos: {myPokemon[0].types.map((type) =>
//                   typeof type === "object" ? type.name : type).join("/")}</h2>
//               <p>ID: {myPokemon[0].id}</p>
//               <p>Vida: {myPokemon[0].hp}</p>
//               <p>Ataque: {myPokemon[0].attack}</p>
//               <p>Defensa: {myPokemon[0].defense}</p>
//               <p>Velocidad: {myPokemon[0].speed}</p>
//               <p>Altura: {myPokemon[0].height}</p>
//               <p>Peso: {myPokemon[0].weight}</p>
//             </div>
//           </div> :
//           <p className={s.loading}>Cargando...</p>
//         }
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     myPokemon: state.detail
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getDetail: (id) => dispatch(getDetail(id))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Detail);