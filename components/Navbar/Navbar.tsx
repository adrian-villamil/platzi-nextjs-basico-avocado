import React from "react";
import Link from "next/link";
import styles from './navbar.module.css';
import { GiAvocado } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppSelector } from "store/hooks";
import { selectCart } from "features/cart/cartSlice";

export const Navbar = () => {
  const cart = useAppSelector(selectCart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach(product => {
      total += product.quantity;
    });

    return total;
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href='/' className={`${styles.link} ${styles.linkLeft}`}>
          <GiAvocado />Avocados
        </Link>
        <Link href='/cart' className={`${styles.link} ${styles.linkRight}`}>
          <AiOutlineShoppingCart />
          <div className={styles.cartNumber}>{getTotalQuantity()}</div>
        </Link>
      </nav>
    </div>
  );
};