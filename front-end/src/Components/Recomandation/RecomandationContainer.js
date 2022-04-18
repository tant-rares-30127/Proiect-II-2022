import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import Recomandation from "./RecomandationIndex";
import List from "./List";

export default function RecomandationContainer() {
  return (
    <Recomandation>
      <Recomandation.Wrapper>
        <Recomandation.Row>
          <List></List>
        </Recomandation.Row>
      </Recomandation.Wrapper>
    </Recomandation>
  );
}
