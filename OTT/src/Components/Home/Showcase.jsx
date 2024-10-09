import React, { useState, useEffect } from 'react';
import style from './showcase.module.css';
// import Nav from "../Nav"
// import Footer from '../Footer';

const Showcase = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
       'https://media.licdn.com/dms/image/v2/C4D12AQEIdhKfSrXLIQ/article-inline_image-shrink_1500_2232/article-inline_image-shrink_1500_2232/0/1595844471591?e=1731542400&v=beta&t=sF43LPHuj3CqloqrhlRl2Ylr_UfjzusAArAZ_MXrFMA',
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // Auto slide every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <div className={style.container}>
            {/* <Nav /> */}
            <div className={style.gallerycontainer}>
              

                <div className={style.gallerywrapper}>
                    <div
                        className={style.gallerygrid}
                        style={{
                            transform: `translateX(-${currentImageIndex * 100}%)`,
                            transition: 'transform 1s ease'
                        }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className={style.galleryitem} onClick={() => handleImageClick(image)}>
                                <img src={image} alt={`Movie ${index + 1}`} className={style.galleryimage} />
                            </div>
                        ))}
                    </div>
                </div>

                {selectedImage && (
                    <div className={style.modal} onClick={closeModal}>
                        <span className={style.close}>&times;</span>
                        <img className={style.modalcontent} src={selectedImage} alt="Selected Hotel View" />
                    </div>
                )}
            </div>
           
        </div>
        {/* <Footer/> */}
        </div>
    );
};

export default Showcase;
