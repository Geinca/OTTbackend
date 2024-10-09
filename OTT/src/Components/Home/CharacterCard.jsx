import React from 'react';
import style from './characterCard.module.css'; // Import CSS for styling

const CharacterCard = ({ image, name, description, role }) => {
  return (
    <div className={style.charactercard}>
      
      <div className={style.characterimage}>
        <img src={image} alt={name} />
      </div>
      <div className={style.characterdetails}>
        <h2>{name}</h2>
        <p>{description}</p>
        <span className={style.role}>{role}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
