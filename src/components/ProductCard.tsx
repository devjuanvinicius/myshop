import * as S from "./ProductCard";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../redux/root-reducer";
import { Product } from "./ProductsList";
import { addProduct, removeProduct } from "../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  const isProductCart = cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }

  function handleRemoveProductToCart() {
    dispatch(removeProduct(product));
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt="" />

      <S.ProductTitle title={product.title}>{product.title}</S.ProductTitle>

      <S.ReviewPriceWrapper>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}

          {` (${product.rating.rate})`}
        </S.Review>
        <S.Price>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "brl",
          }).format(product.price)}
        </S.Price>
      </S.ReviewPriceWrapper>

      <S.AddToCartBtnWrapper>
        {isProductCart ? (
          <S.removeFromCartBtn onClick={handleRemoveProductToCart}>
            Remover do carrinho
            <FiShoppingCart />
          </S.removeFromCartBtn>
        ) : (
          <S.AddToCartBtn onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCartBtn>
        )}
      </S.AddToCartBtnWrapper>
    </S.Card>
  );
}
