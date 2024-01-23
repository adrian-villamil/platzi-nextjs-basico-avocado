import React, { useEffect, useState } from "react";
import { Card } from "@/components/Card/Card";
import { CardList } from "@/components/CardList/CardList";
import { Title } from "@/components/Title/Title";
import styles from './home.module.css';

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch('/api/avo')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductList(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={styles.container}>
      <Title />
      <CardList>
        {productList.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </CardList>
    </div>
  );
};

export default Home;