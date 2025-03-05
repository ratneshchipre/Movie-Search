import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const storedFavs = localStorage.getItem('favorites');
        return storedFavs ? JSON.parse(storedFavs) : []
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavs = (movie) => {
        setFavorites((prev) => [...prev, movie])
    }

    const removeFromFavs = (movieId) => {
        setFavorites((prev) => prev.filter(movie => movie.id !== movieId))
    }

    const isFavs = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavs,
        removeFromFavs,
        isFavs
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}