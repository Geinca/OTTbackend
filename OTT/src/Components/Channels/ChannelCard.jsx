import React from 'react';
import style from './channel.module.css';

const channelsData = [
  {
    id: 1,
    name: 'HBO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg',
    description: 'Premium channel with exclusive shows and movies.',
  },
  {
    id: 2,
    name: 'Netflix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    description: 'Global streaming service with original content.',
  },
  {
    id: 3,
    name: 'Disney+',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg',
    description: 'Streaming all the best Disney, Marvel, and Star Wars content.',
  },
  {
    id: 4,
    name: 'Amazon Prime Video',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png',
    description: 'Streaming service with a wide variety of original and licensed content.',
  },
  {
    id: 5,
    name: 'Hulu',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Hulu_2019.svg',
    description: 'Watch TV shows, movies, and exclusive Hulu originals.',
  },
];

const Channels = () => {
  return (
    <div className={style.channelscontainer}>
      <h1 className={style.channelstitle}>Available Channels</h1>
      <div className={style.channelsgrid}>
        {channelsData.map((channel) => (
          <div key={channel.id} className={style.channelcard}>
            <img src={channel.logo} alt={channel.name} className={style.channellogo} />
            <h2 className={style.channelname}>{channel.name}</h2>
            <p className={style.channeldescription}>{channel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channels;
