import React, { useEffect, useState } from "react";
import { Card } from "@/components/Card/Card";
import { CardList } from "@/components/CardList/CardList";
import { Title } from "@/components/Title/Title";

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
    <div>
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