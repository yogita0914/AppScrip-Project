"use client";

import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.name}>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
        {product.rating && <p className={styles.rating}>Rating: {product.rating.rate}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
