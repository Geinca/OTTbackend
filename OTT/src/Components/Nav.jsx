import React, { useState } from 'react';
import style from './nav.module.css';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbarlogo}>
        <h1><Link id={style.links} to={'/'}>DT TV</Link></h1>
      </div>
      
      <ul className={`${style.navbarmenu} ${menuOpen ? style.showmenu : ''}`}>
        <li><Link id={style.links}  to={'/'}>ALL</Link></li>
        <li><Link id={style.links} to={'/movie'}>Movies</Link></li>
        <li><Link id={style.links} to={'/show'}>Shows</Link></li>
        <li><Link id={style.links} to={'/channel'}>Channels</Link></li>
        <li className={style.navbarlive}><Link id={style.links} to={'/live'}>Live</Link><span className={style.liveindicator}>•</span></li>
        
      </ul>

      
      
      <div className={style.navbaractions}>
        <div className={style.searchicon}>
          <SearchIcon />
        </div>
        <button className={style.subscribebutton}><Link to={'/subscribe'} style={{"textDecoration":"none","color":"white"}}> Subscribe</Link></button>
        <button className={style.signinbutton}><Link to={"/register"} style={{"textDecoration":"none","color":"white"}}>Sign In</Link></button> </div>
        <div className={style.hamburger} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default NavBar;
