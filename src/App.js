import './App.css';
import Catalog from './pages/Catalog'
import Film from './pages/Film';
import './movies.json'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return ( 
    <>
    <BrowserRouter>
    <header>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/movie">films</Link></p>
    </header>
    <Routes>
    <Route path='/' element={<Catalog/>}/>
    <Route path='/movie/:id' element={<Film/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
