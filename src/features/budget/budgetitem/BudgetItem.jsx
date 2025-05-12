import React from "react";
import styled from "styled-components";
import ItemButtons from "./ItemButtons";
import Stats from "./Stats";

const ItemContainer = styled.div`
  display: flex;
  padding: 0.8rem 0.5rem;
  border-bottom: 0.1rem solid;
  max-width: 75%;
`;

export default function BudgetItem() {
  return (
    <ItemContainer>
      <div>Item Name</div>
      <ItemButtons />
      <Stats />
    </ItemContainer>
  );
}
