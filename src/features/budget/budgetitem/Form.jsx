import React, { useState } from "react";
import styled from "styled-components";

const StyledFormButtons = styled.div`
  min-width: 7rem;
  display: flex;
  justify-content: center;
`;
const ItemInput = styled.input`
  max-width: 2rem;
  text-align: center;
`;
const ItemButton = styled.button`
  max-width: 2rem;
  text-align: center;
  &:hover {
    border: 0.185rem solid var(--main-color);
    border-radius: 0.2rem;
    background-color: inherit;
  }
`;
const StyledForm = styled.form`
  display: flex;
  padding-right: 1rem;
`;
const StyledSubmitButton = styled.button`
  margin-left: 1rem;
`;
const StyledNoteInput = styled.input`
  max-width: 5rem;
`;

export default function ItemButtons() {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleDel, setToggleDel] = useState(false);
  const [showForm, setShowForm] = useState(false);

  function handleButtons(e, type) {
    e.preventDefault();
    if (type === `del`) {
      setToggleDel((x) => !x);
      setToggleAdd(false);
      setShowForm((x) => !x);
    }
    if (type === `add`) {
      setToggleAdd((x) => !x);
      setToggleDel(false);
      setShowForm((x) => !x);
    }
  }

  return (
    <StyledForm>
      <StyledFormButtons>
        {showForm && toggleAdd && (
          <ItemInput autoFocus placeholder="0" name="amount"></ItemInput>
        )}
        <div>
          <ItemButton onClick={(e) => handleButtons(e, `add`)}>➕</ItemButton>
          <ItemButton onClick={(e) => handleButtons(e, `del`)}>➖</ItemButton>
        </div>
        {showForm && toggleDel && (
          <ItemInput autoFocus placeholder="0" name="amount"></ItemInput>
        )}
      </StyledFormButtons>
      {showForm && (
        <>
          <label htmlFor="notes">Notes:</label>
          <StyledNoteInput type="text" name="notes" placeholder="Optional" />
          <StyledSubmitButton>Add</StyledSubmitButton>
        </>
      )}
    </StyledForm>
  );
}
