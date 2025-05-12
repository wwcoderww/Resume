import React, { useState } from "react";
import BudgetItem from "./budgetitem/BudgetItem";
import NavBar from "./budgetnav/NavBar";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;

export default function Budget() {
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <StyledMain>
      <NavBar setToggleEdit={setToggleEdit} />
      <BudgetItem toggleEdit={toggleEdit} />
      <BudgetItem toggleEdit={toggleEdit} />
      <BudgetItem toggleEdit={toggleEdit} />
      <BudgetItem toggleEdit={toggleEdit} />
      <BudgetItem toggleEdit={toggleEdit} />
    </StyledMain>
  );
}
