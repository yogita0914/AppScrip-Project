"use client";

import React, { useState } from 'react';
import styles from './LangDropdown.module.css';

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const languages = ['ENG', 'ESP', 'FRA', 'DEU', 'ITA'];

  return (
    <div className={styles.dropdownContainer}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        {selectedLanguage} <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((language) => (
            <li key={language} onClick={() => selectLanguage(language)} className={styles.dropdownItem}>
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
