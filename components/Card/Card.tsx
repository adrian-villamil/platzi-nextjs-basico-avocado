import Link from 'next/link';
import React from 'react';
import styles from './card.module.css';

type Props = {
  product: TProduct
};

export const Card = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <Link
        href={`/product/${product.id}`}
        className={styles['card-link-image']}
      >
        <img src={product.image} alt={product.name} className={styles.image} />
      </Link>
      <div className={styles['card-info']}>
        <Link
          href={`/product/${product.id}`}
          className={styles['card-link-name']}
        >
          {product.name}
        </Link>
        <p className={styles['card-price']}>Price: ${product.price}</p>
      </div>
    </div>
  );
};