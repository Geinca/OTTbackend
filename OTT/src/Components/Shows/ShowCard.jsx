import React from 'react';
import style from './showcard.module.css';

const ShowCard = ({ image, title, description }) => {
  return (
    <div className={style.card}>
      <img src={image} alt={title} className={style.showImage} />
      <div className={style.cardContent}>
        <h3 className={style.showTitle}>{title}</h3>
        <p className={style.showDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ShowCard;
