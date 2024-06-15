import * as S from "./header";

import { useState } from "react";
import { Cart } from "./Cart";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../redux/root-reducer";
import { login, logout } from "../redux/User/user-slice";

export function Header() {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    if (!user) {
      dispatch(
        login({
          name: "User",
          email: "user@test.com",
        })
      );
    } else {
      dispatch(logout());
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>My Shop</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
            {cart.length !== 0 ? <S.CounterProductsCart>{cart.length}</S.CounterProductsCart> : ""}
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} setShowCart={setShowCart} />
    </S.StyledHeader>
  );
}
