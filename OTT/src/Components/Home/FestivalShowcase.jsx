import React from 'react';
import style from './festival.module.css';

const FestivalShowcase = () => {
  const celebrityEvents = [
    { day: 'Day 1', title: 'Lalbaugcha Raja', year: '2024', image: 'https://www.hindustantimes.com/ht-img/img/2024/09/07/550x309/Lalbaugcha_Raja_1725699025748_1725699026078.jfif' },
    { day: 'Day 2', title: 'Lalbaugcha Raja', year: '2024', image: 'https://www.hindustantimes.com/ht-img/img/2024/09/07/550x309/Lalbaugcha_Raja_1725699025748_1725699026078.jfif' },
    { day: 'Day 3', title: 'Lalbaugcha Raja', year: '2024', image: 'https://www.hindustantimes.com/ht-img/img/2024/09/07/550x309/Lalbaugcha_Raja_1725699025748_1725699026078.jfif' },
    { day: 'Day 4', title: 'Lalbaugcha Raja', year: '2024', image: 'https://www.hindustantimes.com/ht-img/img/2024/09/07/550x309/Lalbaugcha_Raja_1725699025748_1725699026078.jfif' },
  ];

  return (
    <div className={style.festivalshowcasecontainer}>
      {/* Celebrities Section */}
      <h2>Celebrities at Lalbaugcha Raja</h2>
      <div className={style.celebritygrid}>
        {celebrityEvents.map((event, index) => (
          <div className={style.celebrityitem} key={index}>
            <img src={event.image} alt={`${event.day} ${event.title}`} />
            <div className={style.celebrityinfo}>
              <h4>{event.day}</h4>
              <p>{event.title} {event.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalShowcase;
