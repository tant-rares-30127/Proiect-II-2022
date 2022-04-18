import React from "react";
import {
  Container,
  Wrapper,
  Column,
  Row,
  Card,
  Card_body,
  Price_section,
  Button,
} from "./Styles/RecomandationStyles";

export default function Recomandation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Recomandation.Wrapper = function RecomandationWrapper({
  children,
  ...restProps
}) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Recomandation.Column = function RecomandationColumn({
  children,
  ...restProps
}) {
  return <Column {...restProps}>{children}</Column>;
};

Recomandation.Row = function RecomandationRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Recomandation.Card = function RecomandationCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Recomandation.Card_body = function RecomandationCard_body({
  children,
  ...restProps
}) {
  return <Card_body {...restProps}>{children}</Card_body>;
};

Recomandation.Price_section = function RecomandationPrice_section({
  children,
  ...restProps
}) {
  return <Price_section {...restProps}>{children}</Price_section>;
};

Recomandation.Button = function RecomandationButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};
