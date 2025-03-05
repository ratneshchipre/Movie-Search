import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { useMovieContext } from '../contexts/MovieContext'

const MovieCard = ({ movie }) => {
    const { isFavs, addToFavs, removeFromFavs } = useMovieContext();
    const isFavorite = isFavs(movie.id);

    const handleFavClick = (e) => {
        e.preventDefault();

        if (isFavorite) removeFromFavs(movie.id)
        else addToFavs(movie)
    }

    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='rounded-[0.8rem] w-[10.45rem] h-[21rem] sm:w-[12.45rem] sm:h-[23rem] overflow-hidden border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-border shadow-[1px_0_10px_rgba(0,0,0,0.1)] hover:brightness-85 transition'>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='rounded-t-[0.5rem] h-[16rem] sm:h-[18rem] w-full object-cover bg-center'
                    alt={movie.title}
                />
            </div>

            <div className='rounded-b-[0.5rem] w-[10.45rem] sm:w-[12.45rem] h-[5.6rem] p-[0.5rem] absolute mb-[-16.5rem] sm:mb-[-17.5rem] backdrop-blur-3xl border-b-[1.5px] border-l-[1.5px] border-r-[1.5px] border-border shadow-[1px_0_10px_rgba(0,0,0,0.1)]'>

                <p className='font-[500] text-text line-clamp-2 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]'>{movie.title}</p>

                <p className='font-[500] text-wrap text-gray-500 inline'>{movie.release_date?.split('-')[0]}</p>

                <button
                    className='absolute right-2.5 top-[-15.3rem] sm:top-[-16.8rem] h-[2rem] w-[2rem] rounded-[50%] text-center bg-fav-bg text-background cursor-pointer'
                    onClick={handleFavClick}
                >
                    <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
                </button>

            </div>

        </div>
    )
}

export default MovieCard