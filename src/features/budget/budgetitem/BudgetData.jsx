import React from "react";
import styled from "styled-components";

const ItemInput = styled.div`
  text-align: end;
`;

export default function BudgetData({ children }) {
  return <ItemInput>{children}</ItemInput>;
}
