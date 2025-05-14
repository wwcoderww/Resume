import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Stats from "./Stats";

const StyledMain = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid;
  display: flex;
  justify-content: space-evenly;
  font-size: 2rem;
`;
const StyledDivider = styled.div`
  border: 0.01rem solid;
`;
const StyledNavOptions = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default function BudgetNav({ setToggleEdit }) {
  const [addingItem, setAddingItem] = useState(false);
  return (
    <>
      <StyledMain>
        <div>
          <StyledNavOptions onClick={() => setAddingItem((x) => !x)}>
            Add Item
          </StyledNavOptions>
        </div>
        <StyledDivider></StyledDivider>
        <div>
          <StyledNavOptions onClick={() => setToggleEdit((x) => !x)}>
            Edit
          </StyledNavOptions>
        </div>
        <StyledDivider></StyledDivider>
        <div>
          <StyledNavOptions>Previously Spent</StyledNavOptions>
        </div>
      </StyledMain>
      {addingItem && <Form setAddingItem={setAddingItem} />}
      <Stats />
    </>
  );
}
