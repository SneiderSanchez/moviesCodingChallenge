import { useEffect, useState } from "react";

import "./styles.css";

function MovieDetails({ details }) {
  return (
    <li className="movie__container">
      <div className="movie__ImageContainer">
        <img
          className="movie__Image"
          src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
        />
      </div>
      <p className="movie__title">{details.title}</p>
    </li>
  );
}

function MoviesDashboard() {
  const [movies, setMovies] = useState([]);
  async function getMovies() {
    try {
      const movies = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=a9b856b302ef45f0fc28033e35b71d6a`
      );
      const data = await movies.json();

      /*       
      getGenre  part but couldn't find the endpoint
      const dataWithGenre = data.results.map(async (movie) => {
        const genres = await Promise.all(movie.genre_ids.map(genre=>fetch('').then(data=>data.json()).catch(e=>console.log(e))))
      }); 
      setMovies(dataWithGenre);
      
      */

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">The Movie DB</h1>
      <h2 className="dashboard__banner">Latest Releases</h2>
      <ul className="dashboard__moviesContainer">
        {movies.map((movie) => (
          <MovieDetails details={movie} key={movie.id} />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return <MoviesDashboard />;
}
