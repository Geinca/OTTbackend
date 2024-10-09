import React from 'react';
import ShowCard from './ShowCard';
import style from './showList.module.css';

const shows = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show One',
    description: 'A thrilling drama about a mysterious stranger.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show Two',
    description: 'A comedy series full of laughs and fun moments.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show Three',
    description: 'An action-packed series with epic battles.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show Four',
    description: 'A romantic drama with a twist of fate.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show Three',
    description: 'An action-packed series with epic battles.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show Four',
    description: 'A romantic drama with a twist of fate.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show Three',
    description: 'An action-packed series with epic battles.',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFV6815cLZXH9GZaMHwm41MWBoakBZhmC8w&s',
    title: 'Show Four',
    description: 'A romantic drama with a twist of fate.',
  },
];

const ShowList = () => {
  return (
    <div className={style.showListContainer}>
      <h2 className={style.showListTitle}>Popular Shows</h2>
      <div className={style.showGrid}>
        {shows.map((show, index) => (
          <ShowCard
            key={index}
            image={show.image}
            title={show.title}
            description={show.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowList;
