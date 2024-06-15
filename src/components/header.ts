import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #252422;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const HeaderTitle = styled.h1`
  color: #fffcf2;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface AuthButtonProps {
  isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: ${(props) => (props.isLogged ? "#EB5E28" : "#FFFCF2")};
  color: #252422;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: #284b63;
  color: #fffcf2;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  position: relative;

  svg {
    font-size: 0.7rem;
  }
`;

export const CounterProductsCart = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);

  background-color: red;
  border-radius: 50%;
`;
