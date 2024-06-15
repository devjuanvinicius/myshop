import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-350px")};

  width: 350px;
  height: 100vw;
  background-color: white;
  color: #252422;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.5s;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const ProductList = styled.ul`
  width: 100%;
  padding: 2rem 0;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Product = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 1rem;
  box-shadow: 0, 0, 0.25, rgba(0, 0, 0, 0.75);

  img {
    width: 30%;
    height: 100%;
    object-fit: contain;
    object-position: top;
  }

  div {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 1rem;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      svg {
        color: red;
        cursor: pointer;
      }
    }
  }
`;

export const ProductTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;
