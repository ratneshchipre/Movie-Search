import React, { useEffect, useRef, useState } from 'react'
import MovieCard from '../components/MovieCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getMovieBySearch, getPopularMovies } from '../services/api'
import errorImg from '../assets/errorImg.png';

const Home = () => {

    const inputRef = useRef();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                setError('Failed to load movies...');
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        const inputValue = inputRef.current.value.trim();
        if (!inputValue) return;
        if (loading) return;

        setLoading(true);

        try {
            const searchResults = await getMovieBySearch(inputValue);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            setError('Failed to get the results...');
            console.log(error);
        } finally {
            setLoading(false);
        }

    }

    return (
        <div className='h-auto w-full flex flex-col items-center bg-background absolute z-1'>

            <div className='mt-[7rem] w-[22rem] sm:w-[26rem] flex justify-center'>

                <h1 className='text-[1.5rem] sm:text-[2rem] font-[420] text-center'>Search for movies, series and more...</h1>

            </div>

            <div className='mt-[1rem] flex items-center justify-center'>

                <form onSubmit={handleSearch}>

                    <input
                        type="text"
                        placeholder='Search here...'
                        className='w-[15rem] sm:w-[25rem] border-[1.5px] border-t-border border-l-border border-b-border bg-white outline-none py-[0.48rem] px-[1rem] text-[1rem] rounded-l-[0.6rem] shadow-[1px_0_10px_rgba(0,0,0,0.1)]'
                        ref={inputRef}
                    />

                    <button
                        type='submit'
                        className='py-[0.47rem] px-[1rem] text-[1.1rem] text-white bg-text rounded-r-[0.6rem] cursor-pointer shadow-[1px_0_10px_rgba(0,0,0,0.1)]'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>

                </form>

            </div>

            {error &&
                <div className='mt-[3rem] flex flex-col items-center justify-center'>

                    <img
                        src={errorImg}
                        alt="error"
                        className='h-[14rem] sm:h-[15rem]'
                    />

                    <p className='text-[1.3rem] sm:text-[1.5rem] text-center mt-[-1.2rem] font-[500]'>{error}</p>

                </div>
            }

            {loading && !error ? (
                <div className='flex mt-[3rem]'>
                    <p className='text-[1.3rem] sm:text-[1.5rem] font-[500] text-center'>Please Wait...</p>
                </div>
            ) : (
                <div className='mt-[1rem] sm:mt-[1.8rem] px-[1rem] pt-[2rem] pb-[3rem] w-full grid grid-cols-[repeat(auto-fit,_minmax(14rem,_0fr))] items-center justify-center gap-x-[1rem] gap-y-[2.5rem]'>
                    {movies.map((movie) => (
                        <MovieCard
                            movie={movie}
                            key={movie.id}
                        />
                    ))}
                </div>
            )}


        </div>
    )
}

export default Home