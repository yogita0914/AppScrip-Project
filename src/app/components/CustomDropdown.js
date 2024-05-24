"use client";

import React, { useState } from 'react';
import styles from './CustomDropdown.module.css';

const CustomDropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <span className={styles.arrow}>{isOpen ?'▲':'▼'}</span>
      </div>
      {isOpen && (
        <div className={styles.menu}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.option}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
