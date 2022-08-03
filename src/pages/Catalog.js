import Movies from '../movies.json'
import App from '../App'
import { Link } from 'react-router-dom'

const Catalog = () => {
 return (
 <>
 <h1>Catalog</h1>
 <div className='container'>
    {Movies.map((movie) => {
        return (
            <div className='card'>
                <Link to={`/movie/${movie.id}`}>
                <img src={movie.image} alt="" />
                <h2>{movie.title}</h2>
                <p>Réalisé par {movie.director}</p>
                <p>Synopsis: {movie.description}</p>
                </Link>
            </div>
        )
    })}
 </div>
 </>   
 )   
}

export default Catalog 

