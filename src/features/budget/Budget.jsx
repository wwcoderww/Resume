import React, { useState } from "react";
import styled from "styled-components";
import BudgetItem from "./budgetitem/BudgetItem";
import NavBar from "./budgetnav/NavBar";
import loadData from "./useGetItems";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: scroll;
`;

export default function Budget() {
  const [toggleEdit, setToggleEdit] = useState(false);
  const data = loadData();
  return (
    <StyledMain>
      <NavBar setToggleEdit={setToggleEdit} />
      {data &&
        data.map((item) => (
          <BudgetItem item={item} toggleEdit={toggleEdit} key={item.id} />
        ))}
    </StyledMain>
  );
}
