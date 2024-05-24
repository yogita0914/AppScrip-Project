"use client";

import React from 'react';
import styles from './Slidebar.module.css';

const Slidebar = () => {
  return (
    <aside className={styles.slidebar}>
      <h2>Filters</h2>
      <div className={styles.filter}>
        <label>
          <input type="checkbox" /> Customizable
        </label>
      </div>
      <div className={styles.filterSection}>
        <h3>Ideal For</h3>
        <label><input type="checkbox" /> Men</label>
        <label><input type="checkbox" /> Women</label>
        <label><input type="checkbox" /> Baby & Kids</label>
      </div>
      <div className={styles.filterSection}>
        <h3>Occasion</h3>
        <p>All</p>
      </div>
      <div className={styles.filterSection}>
        <h3>Work</h3>
        <p>All</p>
      </div>
      <div className={styles.filterSection}>
        <h3>Fabric</h3>
        <p>All</p>
      </div>
      <div className={styles.filterSection}>
        <h3>Segment</h3>
        <p>All</p>
      </div>
      <div className={styles.filterSection}>
        <h3>Suitable For</h3>
        <p>All</p>
      </div>
      <div className={styles.filterSection}>
        <h3>Raw Materials</h3>
        <p>All</p>
      </div>
      <div className={styles.filterSection}>
        <h3>Pattern</h3>
        <p>All</p>
      </div>
    </aside>
  );
};

export default Slidebar;
