import React from 'react';
import Slider from 'react-slick';
import style from './chennel.module.css'; // Add your CSS

const Channel = () => {
  const channels = [
    {
      id: 1,
      name: 'Chumbak TV',
      image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-79293,resizemode-75,msid-66506963/small-biz/marketing-branding/marketing/powerful-tool-why-live-videos-matter-for-small-businesses/live-videos-getty.jpg',
      live: true,
    },
    {
      id: 2,
      name: 'Shemaroo TV',
      image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-79293,resizemode-75,msid-66506963/small-biz/marketing-branding/marketing/powerful-tool-why-live-videos-matter-for-small-businesses/live-videos-getty.jpg',
      live: true,
    },
    {
      id: 3,
      name: 'Shemaroo Umang',
      image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-79293,resizemode-75,msid-66506963/small-biz/marketing-branding/marketing/powerful-tool-why-live-videos-matter-for-small-businesses/live-videos-getty.jpg',
      live: false,
    },
    {
      id: 4,
      name: 'Shemaroo Marathi',
      image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-79293,resizemode-75,msid-66506963/small-biz/marketing-branding/marketing/powerful-tool-why-live-videos-matter-for-small-businesses/live-videos-getty.jpg',
      live: true,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.channelcarousel}>
      <h2>All Channels</h2>
      <Slider {...settings}>
        {channels.map((channel) => (
          <div key={channel.id} className={style.channelcard}>
            <img src={channel.image} alt={channel.name} className={style.channelimage} />
            {channel.live && <span className={style.livebadge}>LIVE</span>}
            <div className={style.channelinfo}>
              <h3>{channel.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Channel;
