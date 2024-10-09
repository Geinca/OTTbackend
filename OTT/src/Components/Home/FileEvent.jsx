import React from 'react';
import style from './events.module.css';
import Nav from '../Nav';
// import Footer from '../Footer';

const eventsData = [
    {
        id: 1,
        title: "Ganesh puja",
        date: "7th September 2024",
        description: "Join us for an exclusive ganesh puja featuring a 7-course meal, live entertainment, and exquisite decor.",
        image: "https://www.mypoojabox.in/cdn/shop/articles/banner_image_ganesh_chaturthi_blog.webp?v=1694502290"
    },
    {
        id: 2,
        title: "Luxury Gala Dinner",
        date: "25th September 2024",
        description: "Join us for an exclusive gala dinner featuring a 7-course meal, live entertainment, and exquisite decor.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DM_gti4n7WJ0YdI5z0sYA5d8wHVGTnSyhg&s"
    },
    {
        id: 3,
        title: "Wine Tasting Evening",
        date: "15th October 2024",
        description: "Savor the finest wines from around the world at our luxurious wine-tasting event.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgx2qPWgmrShMfFPzvaaoaO-kp6NTjzCoeg&s"
    },
    {
        id: 4,
        title: "Poolside Party",
        date: "5th November 2024",
        description: "Enjoy a night of music, dancing, and cocktails by the pool under the stars.",
        image: "https://images.venuebookingz.com/27379-1710583411-wm-emerald-by-insa-2.jpg"
    },
    {
        id: 5,
        title: "Luxury Gala Dinner",
        date: "25th November 2024",
        description: "Join us for an exclusive gala dinner featuring a 7-course meal, live entertainment, and exquisite decor.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbd0hxl9Nb3ep7mMWV1GJ-el5OLWwSJKYRJQ&s"
    },
    {
        id: 6,
        title: "New Year's Eve Celebration",
        date: "31st December 2024",
        description: "Ring in the new year with a grand celebration at our luxury hotel, featuring fireworks, music, and gourmet dining.",
        image: "https://cdn.britannica.com/18/128818-050-48E6CB53/Fireworks-confetti-cheering-crowd-Times-Square-New-January-1-2007.jpg"
    },
    {
        id: 6,
        title: "New Year's Eve Celebration",
        date: "31st December 2024",
        description: "Ring in the new year with a grand celebration at our luxury hotel, featuring fireworks, music, and gourmet dining.",
        image: "https://cdn.britannica.com/18/128818-050-48E6CB53/Fireworks-confetti-cheering-crowd-Times-Square-New-January-1-2007.jpg"
    },
    {
        id: 6,
        title: "New Year's Eve Celebration",
        date: "31st December 2024",
        description: "Ring in the new year with a grand celebration at our luxury hotel, featuring fireworks, music, and gourmet dining.",
        image: "https://cdn.britannica.com/18/128818-050-48E6CB53/Fireworks-confetti-cheering-crowd-Times-Square-New-January-1-2007.jpg"
    },


];

const Events = () => {
    return (
        <div>
            <div className={style.container}>
            {/* <Nav /> */}
            <div className={style.eventscontainer}>
                <h1 className={style.eventstitle}>UPCOMING MOVIES</h1>
                <div className={style.eventsgrid}>
                    {eventsData.map((event) => (
                        <div key={event.id} className={style.eventcard}>
                            <img src={event.image} alt={event.title} className={style.eventimage} />
                            <div className={style.eventcontent}>
                                <h2 className={style.eventtitle}>{event.title}</h2>
                                <p className={style.eventdate}>{event.date}</p>
                                <p className={style.eventdescription}>{event.description}</p>
                                <button className={style.learnmorebtn}>Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            
        </div>
        {/* <Footer /> */}
        </div>

    );
};

export default Events;
