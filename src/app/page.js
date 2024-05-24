"use client";

import React, { useState } from 'react';
import RootLayout from './layout';
import ProductList from './components/ProductList';
import Slidebar from './components/Slidebar';
import CustomDropdown from './components/CustomDropdown';
import styles from './page.module.css';

const sortingOptions = [
  'Recommended',
  'Newest First',
  'Popular',
  'Price: High to Low',
  'Price: Low to High'
];

const Page = () => {
  const [isSlidebarVisible, setIsSlidebarVisible] = useState(true);
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0]);

  const toggleSlidebar = () => {
    setIsSlidebarVisible(!isSlidebarVisible);
  };

  return (
    <div>
      <div className={styles.productSection}>
        <div className={styles.homePage}>
          <div className={styles.homeShop}><p href="#">Home </p></div>
          <div><p>| Shop</p></div>
        </div>
        <h1 className={styles.header}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.items}>
          <p>3425 ITEMS</p>
          <button onClick={toggleSlidebar}>
            {isSlidebarVisible ? 'Hide Filter' : 'Show Filter'}
          </button>
        </div>
        <div className={styles.dropdown}>
          <CustomDropdown
            options={sortingOptions}
            selected={selectedSort}
            onSelect={setSelectedSort}
          />
        </div>
      </div>

      <div className={styles.content}>
        {isSlidebarVisible && <Slidebar />}
        <div className={isSlidebarVisible ? styles.containerWithSidebar : styles.containerWithoutSidebar}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Page;
