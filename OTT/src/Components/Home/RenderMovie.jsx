import React from 'react';
import MovieCard from './MovieCard';
import style from './renderMovie.module.css'

const movies = [
  {
    image: 'https://i.pinimg.com/736x/94/29/42/94294224c52e7a83a3927263e11ec2f1.jpg',
    title: 'Marvelous Malhar',
    genre: 'Drama | English',
    language: 'Drama | English'
  },
  {
    image: 'https://i.pinimg.com/736x/94/29/42/94294224c52e7a83a3927263e11ec2f1.jpg',
    title: 'Superhit Gujarati Movies',
    genre: 'Drama | Gujarati',
    language: 'Gujarati'
  },
  {
    image: 'https://i.pinimg.com/736x/94/29/42/94294224c52e7a83a3927263e11ec2f1.jpg',
    title: 'Guju Comedy',
    genre: 'Drama | Gujarati',
    language: 'Gujarati'
  },
  {
    image: 'https://i.pinimg.com/736x/94/29/42/94294224c52e7a83a3927263e11ec2f1.jpg',
    title: 'Guju Comedy',
    genre: 'Drama | Gujarati',
    language: 'Gujarati'
  }
];

const App = () => {
  return (
   <div>
     <h1 className={style.eventstitle} id='hindi'>GUJARATI MOVIE</h1>
    <div className={style.movielist}>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          image={movie.image}
          title={movie.title}
          genre={movie.genre}
          language={movie.language}
        />
      ))}
    </div>
   </div>
  );
};

export default App;
