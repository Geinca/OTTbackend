import React from 'react';
import style from './movieCard.module.css';

const MovieCard = ({ image, title, genre, language }) => {
  return (
    <div className={style.moviecard}>
      <div className={style.movieimage}>
        <img src={image} alt={title} />
      </div>
      <div className={style.moviedetails}>
        <h2>{title}</h2>
        <p>{genre}</p>
        <p>{language}</p>
      </div>
    </div>
  );
};

export default MovieCard;
