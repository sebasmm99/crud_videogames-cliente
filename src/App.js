import './App.css';
import GameList from './GameList';
import AddGame from './AddGame';
import EditGame from './EditGame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">CRUD VIDEOGAMES by Sebastián Martínez</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="addgame">Add Game</a>
              </li> 
            </ul>
          </div>
        </div>
      </nav>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GameList/>} exact></Route>
          <Route path='/addgame' element={<AddGame/>} exact></Route>
          <Route path='/editgame/:idgame' element={<EditGame/>} exact></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
