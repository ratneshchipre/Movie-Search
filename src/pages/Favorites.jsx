import React from 'react'
import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return (

      <div className='h-auto w-full flex flex-col items-center bg-background absolute z-1'>

        <div className='mt-[7rem] flex justify-center'>

          <h1 className='text-[1.4rem] sm:text-[1.7rem] font-[420] text-center'>Your Favorite's!</h1>

        </div>

        <div className='px-[1rem] pt-[2rem] pb-[3rem] w-full grid grid-cols-[repeat(auto-fit,_minmax(14rem,_0fr))] items-center justify-center gap-x-[1rem] gap-y-[2.5rem]'>
          {favorites.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.id}
            />
          ))}
        </div>

      </div>

    );
  }

  return (

    <div className='h-auto w-full flex flex-col items-center bg-background absolute z-1'>

      <div className='mt-[7rem] flex justify-center'>

        <h1 className='text-[1.4rem] sm:text-[1.7rem] font-[420] text-center'>No Favorite's Added Yet.</h1>

      </div>

    </div>

  );

}

export default Favorites