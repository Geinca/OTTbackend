import React from 'react';
import Slider from "react-slick";
import style from './movie.module.css';

const MovieCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      imageUrl: 'https://images.indianexpress.com/2016/09/ms-dhoni-review-480.jpg?w=480',  // Replace with your image path
      title: 'Shakeela',
      subtitle: 'INSPIRED BY A TRUE STORY',
      languages: ['HINDI', 'TAMIL', 'TELUGU', 'KANNADA', 'MALAYALAM']
    },
    {
      id: 2,
      imageUrl: 'https://images.indianexpress.com/2016/09/ms-dhoni-review-480.jpg?w=480',
      title: 'Another Movie',
      subtitle: 'Another Story',
      languages: ['ENGLISH', 'HINDI', 'TAMIL']
    },
    {
        id: 3,
        imageUrl: 'https://images.indianexpress.com/2016/09/ms-dhoni-review-480.jpg?w=480',
        title: 'Another Movie',
        subtitle: 'Another Story',
        languages: ['ENGLISH', 'HINDI', 'TAMIL']
      },
      {
        id: 4,
        imageUrl: 'https://images.indianexpress.com/2016/09/ms-dhoni-review-480.jpg?w=480',
        title: 'Another Movie',
        subtitle: 'Another Story',
        languages: ['ENGLISH', 'HINDI', 'TAMIL']
      },
      {
        id: 5,
        imageUrl: 'https://images.indianexpress.com/2016/09/ms-dhoni-review-480.jpg?w=480',
        title: 'Another Movie',
        subtitle: 'Another Story',
        languages: ['ENGLISH', 'HINDI', 'TAMIL']
      },
  ];

  return (
    <div className={style.container}>
      <div className={style.carouselcontainer}>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className={style.carouselslide}>
            <div className={style.bannercontent}>
              <img src={slide.imageUrl} alt={slide.title} className={style.bannerimage}/>
              <div className={style.moviedetails}>
                <h2 className={style.movietitle}>{slide.title}</h2>
                <p className={style.moviesubtitle}>{slide.subtitle}</p>
                <div className={style.movielanguages}>
                  {slide.languages.join(' | ')}
                </div>
                <button className={style.watchnowbutton}>WATCH NOW</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default MovieCarousel;
