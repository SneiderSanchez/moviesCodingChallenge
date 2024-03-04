"use client";
import { useEffect, useState } from "react";
import { Movie, Movies } from "@/utils/types";
import Image from "next/image";

function MovieDetails({ details }: { details: Movie }) {
  return (
    <li className="grow basis-64">
      <div className="">
        <Image
          alt={details.original_title}
          src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <p className="">{details.title}</p>
    </li>
  );
}

function MoviesDashboard() {
  const [movies, setMovies] = useState<Movies["results"]>([]);
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
    <div className="space-y-4">
      <h1 className="text-2xl text-center">The Movie DB</h1>
      <h2 className="text-xl text-center bg-light-gray p-2">Latest Releases</h2>
      <ul className="flex flex-wrap gap-x-5 gap-y-10 px-4">
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
