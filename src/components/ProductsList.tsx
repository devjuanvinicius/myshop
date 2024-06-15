import * as S from "./ProductsListStyle.ts";

import { ProductCard } from "./ProductCard.tsx";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  id?: number;
  title: string;
  image: string;
  price: number;
  category: string;
  rating: { rate: number };
}

export function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get("https://fakestoreapi.com/products");
      const productsData = response.data;

      setProducts(productsData);
    }

    loadProducts();
  }, []);

  return (
    <S.Container>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </S.Container>
  );
}
