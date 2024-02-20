import React from "react";
import { useAppSelector } from "store/hooks";
import { selectCart } from "features/cart/cartSlice";
import { CartItem } from "@/components/CartItem/CartItem";
import { FaInfoCircle } from "react-icons/fa";
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

  return (
    <div className={styles.cart_page}>
      <h1 className={styles.page_title}>Shopping Cart</h1>
      {getTotal().totalQuantity ?
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
        </div> :
        <div className={styles.empty_container}>
          <p className={styles.empty_text}>
            <FaInfoCircle />
            Your shopping cart is empty
          </p>
        </div>
      }
    </div>
  );
};

export default Cart;