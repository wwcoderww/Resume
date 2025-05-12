import React from "react";
import styled from "styled-components";
import BudgetData from "./BudgetData";

const MainContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const LabelStyled = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default function Stats() {
  return (
    <MainContainer>
      <LabelStyled>
        <div>Available:</div>
        <BudgetData>$100 / $200</BudgetData>
      </LabelStyled>
      <LabelStyled>
        <div>Spent:</div>
        <BudgetData>$100</BudgetData>
      </LabelStyled>
      <LabelStyled>
        <div>Budgeted:</div>
        <BudgetData>$200</BudgetData>
      </LabelStyled>
    </MainContainer>
  );
}
