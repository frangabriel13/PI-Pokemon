import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import PokeCreate from './components/PokeCreate';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route exact path='/pokemons/:id' component={Detail} />
          <Route exact path='/pokemons' component={PokeCreate}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Henry Pokemon</h1>
//     </div>
//   );
// }

// export default App;
