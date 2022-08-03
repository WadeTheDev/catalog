import movies from '../movies.json'
import App from '../App'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Film = () => {
    const params = useParams()
    const { id } = params
    const currentMovies = movies.find(movie => movie.id === Number(id))
    const [movie] = useState(currentMovies)
    return(
        <>
        <section>
            <h1>hello</h1>
        <img src={movie.image} alt={movie.title} />
        <h1>{movie.title}</h1>
            <p>Réalisé par {movie.director}</p>
            <p>Synopsis: {movie.description}</p>
        </section>
        </>
    )
}

export default Film