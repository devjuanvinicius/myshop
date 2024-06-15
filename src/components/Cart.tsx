import * as S from "./CartStyle";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../redux/root-reducer";
import { IoMdClose } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { removeProduct } from "../redux/Cart/cart-slice";
import { Product } from "./ProductsList";

interface CartProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Cart({ showCart, setShowCart }: CartProps) {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  const productTotal = cart.reduce((totalCart, product) => {
    return (totalCart += product.price);
  }, 0);

  function handleRemoveProductToCart(productToRemove: Product) {
    dispatch(removeProduct(productToRemove));
  }

  return (
    <S.Container showCart={showCart}>
      <S.Title>
        <h1>Carrinho</h1>
        <IoMdClose
          onClick={() => {
            setShowCart(!showCart);
          }}
        />
      </S.Title>

      <S.ProductList>
        {cart.map((product) => {
          return (
            <S.Product key={product.id}>
              <img src={product.image} alt="" />
              <div>
                <h2>{product.title}</h2>

                <div>
                  <p>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </p>
                  <FaTrash
                    onClick={() => {
                      handleRemoveProductToCart(product);
                    }}
                  />
                </div>
              </div>
            </S.Product>
          );
        })}
      </S.ProductList>

      <S.ProductTotal>
        Total:{" "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(productTotal)}
      </S.ProductTotal>
    </S.Container>
  );
}
