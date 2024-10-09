import React from 'react';
import style from './card.module.css';

const ChannelCard = ({ image, name, genre }) => {
  return (
    <div className={style.channelCard}>
      <img src={image} alt={name} className={style.channelImage} />
      <div className={style.channelInfo}>
        <h3>{name}</h3>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default ChannelCard;
