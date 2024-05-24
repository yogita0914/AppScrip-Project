import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import LangDropdown from './LangDropdown';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        
        </div>
      </div>
      <div>
        <div className={styles.logoText}>LOGO</div>
        <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>
      </div>
      <div className={styles.actions}>
        <a href="#">&#x1F50D;</a>
        <a href="#">&#x2764;</a>
        <a href="#">&#x1F6D2;</a> 
        <a href="#" className={styles.actionslast}>&#x1F464;</a>
        <LangDropdown />
      </div>
    </header>
  );
};

export default Header;
