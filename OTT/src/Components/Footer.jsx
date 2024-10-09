import React from 'react';
import style from './footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={style.container}>
      <div className={style.section}>
        <h2>Trending</h2>
        <ul>
          <li>Bachubhai</li>
          <li>Chanchal Haseena</li>
          <li>Kamthaan</li>
          <li>Ratanpur</li>
          <li>Lagan Special</li>
          <li>Fakt Mahilao Maate</li>
          <li>Tango Charlie</li>
          <li>Jab We Met</li>
          <li>Naadi Dosh</li>
          <li>Padosan</li>
        </ul>
      </div>
      <div className={style.section}>
        <h2>Movies by Language</h2>
        <ul>
          <li><Link  id={style.links} to={'/hindi'}>Hindi Movies</Link></li>
          <li><Link  id={style.links} to={'/gujrati'}>Gujarati Movies</Link></li>
          <li><Link  id={style.links} to={'/movie'}>Marathi Movies</Link></li>
          <li><Link  id={style.links} to={'/movie'}>Punjabi Movies</Link></li>
        </ul>
      </div>
      <div className={style.section}>
        <h2>Movies by Genre</h2>
        <ul>
          <li>Crime Movies</li>
          <li>Action Movies</li>
          <li>Romance Movies</li>
          <li>Comedy Movies</li>
          <li>Horror Movies</li>
          <li>Animation Movies</li>
          <li>Thriller Movies</li>
          <li>Drama Movies</li>
          <li>Hot Movies</li>
        </ul>
      </div>
      <div className={style.section}>
        <h2>Live TV</h2>
        <ul>
          <li><Link  id={style.links} to={'/live'}>Shemaroo TV</Link></li>
          <li><Link  id={style.links} to={'/live'}>Shemaroo Umang</Link></li>
          <li><Link  id={style.links} to={'/live'}>Shemaroo Marathibana</Link></li>
          <li><Link  id={style.links} to={'/live'}>Chumbak TV</Link></li>
        </ul>
      </div>
      <div className={style.section}>
        <h2>Music Video by Genre</h2>
        <ul>
          <li>Melody Songs</li>
          <li>Romantic Songs</li>
          <li>Hindi Songs</li>
          <li>Gujarati Songs</li>
          <li>Marathi Songs</li>
          <li>Punjabi Songs</li>
          <li>Old Songs</li>
          <li>New songs</li>
        </ul>
      </div>
     
     
      <div className={style.footer}>
        <div className={style.connect}>
          <h3>Connect with us</h3>
          <ul className={style.socialmedia}>
            <li>
              <InstagramIcon/>
            </li>
            <li>
             <FacebookIcon/>
            </li>
            <li>
             <TwitterIcon/>
            </li>
          </ul>
        </div>
        <div className={style.app}>
          <h3>DT TV APP</h3>
          <ul className={style.appstore}>
            <li>
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" height={"70px"}/>
              </a>
            </li>
            
          </ul>
          
        </div>
      </div>
      <div className={style.copyright}>
        <p>ABOUT US | TERMS OF USE | PRIVACY POLICY | FAQ'S | CONTACT US | SECURITY ALERT</p>
        <p>DT TV Entertainment Ltd © 2024, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;