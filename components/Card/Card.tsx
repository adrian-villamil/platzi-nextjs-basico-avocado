import Link from 'next/link';
import React from 'react';
import styles from './card.module.css';

type Props = {
  product: TProduct
};

export const Card = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <Link className={styles.link} href={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className={styles.container}>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};