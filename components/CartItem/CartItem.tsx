import React, { useState } from "react";
import styles from './caritem.module.css';
import { useAppDispatch } from "store/hooks";
import { decrementQuantity, incrementQuantity, removeItem } from "features/cart/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

interface IProps {
  cartItem: TCartItem
}

export const CartItem = ({ cartItem }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.product_container}>
      <div className={styles.product_image}>
        <img src={cartItem.image} alt={cartItem.name} />
      </div>
      <div className={styles.product_info}>
        <h3>{cartItem.name}</h3>
        <p>SKU: {cartItem.sku}</p>
      </div>
      <div className={styles.quantity_buttons}>
        <button
          onClick={() => dispatch(decrementQuantity(cartItem.id))}
        >
          -
        </button>
        <span>{cartItem.quantity}</span>
        <button
          onClick={() => dispatch(incrementQuantity(cartItem.id))}
        >
          +
        </button>
      </div>
      <div className={styles.product_price}>
        <span>US ${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
      </div>
      <button
        className={styles.remove_button}
        onClick={() => dispatch(removeItem(cartItem.id))}
      >
        <FaTrashAlt />
        Remove
      </button>
    </div>
  );
};