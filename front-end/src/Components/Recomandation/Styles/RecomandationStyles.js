import { getByPlaceholderText } from "@testing-library/react";
import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  padding-top: 4%;
  padding-bottom: 4%;
  padding-left: 5%;
  padding-right: 5%;
  background: linear-gradient(0.25turn, #ebf8e1, #f69d3c);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  flex-wrap: nowrap;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-left: 7.5%;
  margin-right: 7.5%;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill);
  grid-gap: 6.5%;

  @media screen {
    grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  }
`;

export const Card = styled.div`
  width: 100%;
  position: relativve;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  background: rgba(255, 255, 255, 1) 100%;

  .card_img {
    position: relative;
    width: 100%;
    top: -20px;
    transition: all 0.3s ease-in-out;
    &:after {
      content: "";
      width: 40%;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      bottom: 1px;
      transform: translateX(-50%);
      box-shadow: 0 20px 12px 0 rgba(0, 0, 0, 0.7);
      transition: all 0.3s ease-in-out;
    }
    img {
      border-radius: 15px;
      width: 100%;
      transfomr: scale(1);
      transition: all 0.3s ease-in-out;
      &:hover {
        width: 110%;
        height: 110%;
      }
    }
  }
`;

export const Card_body = styled.div`
  padding: 0 25px;
  h2 {
    font-family: "Roboto", cursive;
    text-align: center;
    font-weight: normal;
    text-transform: uppercase;
    margin: 10px 0;
    letter-spacing: 2px;
    font-size: 12px;
  }
  p {
    text-align: center;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
`;
export const Price_section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
`;
export const Button = styled.div`
  margin-bottom: 6%;
  width: 100%;
  height: 50%;
  border: 0.2rem solid;
  text-align: center;
  border-radius: 5px;
  background: rgba(229, 82, 65, 1) 100%;
  font-weight: bold;
  &:hover {
    text-transform: uppercase;
    height: 110%;
  }
`;
