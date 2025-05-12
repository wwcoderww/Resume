import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Stats from "./Stats";
import { MdDelete } from "react-icons/md";

const ItemContainer = styled.div`
  display: flex;
  padding: 0.8rem 0.5rem;
  border-bottom: 0.1rem dashed;
`;
const StyledButton = styled.button`
  margin-left: auto;
  margin-right: 2rem;
`;

export default function BudgetItem({ toggleEdit }) {
  return (
    <ItemContainer>
      <div>Item Name</div>
      <Form />
      <Stats toggleEdit={toggleEdit} />
      {toggleEdit && (
        <StyledButton>
          <MdDelete />
        </StyledButton>
      )}
    </ItemContainer>
  );
}
