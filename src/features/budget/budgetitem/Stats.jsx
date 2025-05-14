import React from "react";
import styled from "styled-components";
import BudgetData from "./BudgetData";
import convertCurrency from "../../../util/currencyConverter";

const MainContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-grow: 1;
  justify-content: space-evenly;
`;
const LabelStyled = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const StyledBudgetInput = styled.input`
  width: 2.5rem;
`;

export default function Stats({ item, toggleEdit }) {
  return (
    <MainContainer>
      <LabelStyled>
        <div>Available:</div>
        <BudgetData>
          {convertCurrency(item.available)} / {convertCurrency(item.budgeted)}
        </BudgetData>
      </LabelStyled>
      <LabelStyled>
        <div>Spent:</div>
        <BudgetData>{convertCurrency(item.spent)}</BudgetData>
      </LabelStyled>
      <LabelStyled>
        <div>Budgeted:</div>
        <BudgetData>
          {toggleEdit ? (
            <StyledBudgetInput placeholder={convertCurrency(item.budgeted)} />
          ) : (
            convertCurrency(item.budgeted)
          )}
        </BudgetData>
      </LabelStyled>
    </MainContainer>
  );
}
