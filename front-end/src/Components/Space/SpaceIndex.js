import React from "react";
import { Container } from "./Styles/SpaceStyles";

export default function Space({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
