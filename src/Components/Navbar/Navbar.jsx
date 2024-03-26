import React, { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={Styles.navbar}>
      <a className={Styles.title} href="/">
        Portfolio
      </a>
      <div className={Styles.menu}>
        {/* whenever this image clicked menu icon converted into cross and menu items dispaly..it is done for small screen Basically */}
        <img
          className={Styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button/"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          {/* whenever we click on any menu item it will automatically closes */}
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
