import { CartItem } from "@/components/CartItem/CartItem";
import { selectCart } from "features/cart/cartSlice";
import React from "react";
import { useAppSelector } from "store/hooks";
import styles from './cart.module.css';

const Cart = () => {
  const cart = useAppSelector(selectCart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(product => {
      totalQuantity += product.quantity;
      totalPrice += product.price * product.quantity;
    });

    return { totalPrice, totalQuantity };
  };

  if (!getTotal().totalQuantity) {
    return (
      <div className={styles.cart_page}>
        <h1>Your shopping cart is empty</h1>
      </div>
    );
  }

  return (
    <div className={styles.cart_page}>
      <h1>Shopping Cart</h1>
      <div className={styles.cart_container}>
        <div className={styles.cart_main}>
          <div className={styles.cart_items}>
            {cart.map(cartItem => (
              <CartItem cartItem={cartItem} />
            ))}
          </div>
        </div>
        <div className={styles.cart_aside}>
          <div className={styles.cart_quantity_container}>
            <h3>Cart</h3>
            <div className={styles.cart_info}>
              <div className={`${styles.column} ${styles.column_labels}`}>
                <span>Items ({getTotal().totalQuantity})</span>
                <span>$ {getTotal().totalPrice.toFixed(2)}</span>
              </div>
              <div className={`${styles.column} ${styles.column_values}`}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;