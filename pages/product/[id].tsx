import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from './product.module.css';
import { useAppDispatch } from "store/hooks";
import { addToCart } from "features/cart/cartSlice";
import { BsCartPlus } from 'react-icons/bs';

const ProductItem = () => {
  const dispatch = useAppDispatch();
  const [avocado, setAvocado] = useState<TProduct>();
  const { query: { id } } = useRouter();

  useEffect(() => {
    if (id) {
      window.fetch(`/api/avo/${id}`)
      .then(response => response.json())
      .then((aguacate) => {
        setAvocado(aguacate);
      })
      .catch(error => console.log(error));
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {/* PRODUCT INFO */}
      <div className={styles.product_container}>
        <div className={styles.product_image}>
          <img src={avocado?.image} alt={avocado?.name} />
        </div>
        <div className={styles.product_info}>
          <h1>{avocado?.name}</h1>
          <p className={styles.price}>$ {avocado?.price}</p>
          <p>SKU: {avocado?.sku}</p>
          <button
            className={styles.add_to_cart}
            onClick={() => dispatch(addToCart(avocado as TProduct))}
          >
            <BsCartPlus />
            ADD TO CART
          </button>
        </div>
      </div>
      {/* DESCRIPCIÓN */}
      <div className={styles.product_description}>
        <h4>Description:</h4>
        <p>{avocado?.attributes.description}</p>
      </div>
      {/* TABLA DE DETALLES */}
      <div className={styles.product_details}>
        <h4>Details:</h4>
        <ul>
          <li>Shape: {avocado?.attributes.shape}</li>
          <li>Hardiness: {avocado?.attributes.hardiness}</li>
          <li>Taste: {avocado?.attributes.taste}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductItem;