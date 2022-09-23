import React, { useState } from "react";
import "./Navbar.css";
import CompleteLogo from "../../Images/LogoPaqariTransparente.png";
import {Link} from "react-scroll";
import EsEnButton from "./EsEnButton";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = ({ navbarLinks }) => {
  // Determines if the "menu icon" was clicked or not. Note that this icon is only visible when the window width is small.
  const [menuClicked, setMenuClicked] = useState(false);
  const [navBarScroll, setNavBarScroll] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const changeBackground = () => {
    if ( window.scrollY >= 140 ) {
      setNavBarScroll(true);
    } else {
      setNavBarScroll(false);
    }
  }
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navBarScroll?"scroll":"navbar"}>
      <div className="navbar__logo">
        <img alt="CompeteLogo" src={CompleteLogo}/>
      </div>
      <div className="navbar__menu">
        {menuClicked ? (

          <CloseIcon fontSize="large" onClick={toggleMenuClick} />
        ) : (
          <MenuIcon
            fontSize="large"
            onClick={toggleMenuClick}
          />
        )}
      </div>
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbar__item" key={index}>
              <Link onClick={() =>toggleMenuClick() } activeClass="active" to={item.url} spy={true} smooth={true} offset={50} duration={1000} className="navbar__link" >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="en-es">
        <EsEnButton/>
      </div>
    </nav>
  );
};

export default Navbar;
