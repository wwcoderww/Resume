import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Stats from "./Stats";
import { MdDelete } from "react-icons/md";
import deleteItem from "../useDelItem";

const ItemContainer = styled.div`
  display: flex;
  padding: 0.8rem 0.5rem;
  border-bottom: 0.1rem dashed;
`;
const StyledButton = styled.button`
  margin-left: auto;
  margin-right: 2rem;
`;
const StyledItemName = styled.div`
  width: 6rem;
`;

export default function BudgetItem({ item, toggleEdit }) {
  const mutate = deleteItem();

  return (
    <ItemContainer>
      <StyledItemName>{item.name}</StyledItemName>
      <Form />
      <Stats item={item} toggleEdit={toggleEdit} />
      {toggleEdit && (
        <StyledButton onClick={() => mutate(item.id)}>
          <MdDelete />
        </StyledButton>
      )}
    </ItemContainer>
  );
}
