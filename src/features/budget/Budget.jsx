import React from "react";
import BudgetItem from "./budgetitem/BudgetItem";
import BudgetNav from "./BudgetNav";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;

export default function Budget() {
  return (
    <StyledMain>
      <BudgetNav />
      <BudgetItem />
      <BudgetItem />
      <BudgetItem />
      <BudgetItem />
      <BudgetItem />
    </StyledMain>
  );
}
