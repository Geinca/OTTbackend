import React from 'react';
import CharacterCard from './CharacterCard';
import style from './renderCharCard.module.css';

const characters = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3leyfc0BpoyewiEOAetAc5YgIlIiu0sC0GQ&s',
    name: 'Bachubhai',
    description: "In 60's, Pursuing Engineering Degree",
    role: 'Main Character',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3leyfc0BpoyewiEOAetAc5YgIlIiu0sC0GQ&s',
    name: 'Nirmala',
    description: "Bachubhai's Beloved Wife & Inspiration",
    role: 'Supporting Character',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3leyfc0BpoyewiEOAetAc5YgIlIiu0sC0GQ&s',
    name: 'Reel Patel',
    description: 'A Reeler as In Middle College ',
    role: 'Supporting Character',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3leyfc0BpoyewiEOAetAc5YgIlIiu0sC0GQ&s',
    name: 'Agam',
    description: 'Shy boy & A Supporting Friend',
    role: 'Supporting Character',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3leyfc0BpoyewiEOAetAc5YgIlIiu0sC0GQ&s',
    name: 'Duri Suk',
    description: 'Korean & Gujarati Girl, Software Expert',
    role: 'Supporting Character',
  },
 
];

const RenderChar = () => {
  return (
    <div>
      <h1 className={style.eventstitle}>HINDI MOVIE</h1>
      <div className={style.characterlist}>
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            image={character.image}
            name={character.name}
            description={character.description}
            role={character.role}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderChar;
