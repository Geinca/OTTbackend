import React, { useState } from 'react';
import ChannelCard from './Cards';
import style from './channelList.module.css';

const channelsData = [
  { image: 'https://i.ytimg.com/vi/dfB0qmJo1eM/maxresdefault.jpg', name: 'Discovery', genre: 'Documentary' },
  { image: 'https://i.ytimg.com/vi/dfB0qmJo1eM/maxresdefault.jpg', name: 'ESPN', genre: 'Sports' },
  { image: 'https://i.ytimg.com/vi/dfB0qmJo1eM/maxresdefault.jpg', name: 'BBC News', genre: 'News' },
  { image: 'https://i.ytimg.com/vi/dfB0qmJo1eM/maxresdefault.jpg', name: 'Cartoon Network', genre: 'Kids' },
  { image: 'https://i.ytimg.com/vi/dfB0qmJo1eM/maxresdefault.jpg', name: 'MTV', genre: 'Music' },
];

const ChannelList = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredChannels = channelsData.filter((channel) => {
    if (filter === 'All') return true;
    return channel.genre === filter;
  });

  return (
    <div className={style.channelListContainer}>
      <div className={style.filterContainer}>
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange('Documentary')}>Documentary</button>
        <button onClick={() => handleFilterChange('Sports')}>Sports</button>
        <button onClick={() => handleFilterChange('Entertainment')}>Entertainment</button>
        <button onClick={() => handleFilterChange('News')}>News</button>
        <button onClick={() => handleFilterChange('Kids')}>Kids</button>
        <button onClick={() => handleFilterChange('Music')}>Music</button>
      </div>
      <div className={style.channelsGrid}>
        {filteredChannels.map((channel, index) => (
          <ChannelCard
            key={index}
            image={channel.image}
            name={channel.name}
            genre={channel.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
