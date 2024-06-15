import styled from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
  height: 32px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ReviewPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.7rem;

  svg {
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const AddToCartBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

export const AddToCartBtn = styled.button`
  border: none;
  border-radius: 5px;
  width: 75%;
  height: 30px;
  background-color: #003459;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  justify-content: center;
  padding: 1.2rem 0;

  svg {
    font-size: 0.7rem;
  }
`;

export const removeFromCartBtn = styled.button`
  border: none;
  border-radius: 5px;
  width: 75%;
  height: 30px;
  background-color: #eb5e28;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
  justify-content: center;
  padding: 1.2rem 0;

  svg {
    font-size: 0.7rem;
  }
`;
