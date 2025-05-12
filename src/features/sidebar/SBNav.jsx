import React, { useState } from "react";
import { MdEdit, MdAdd } from "react-icons/md";
import SBNavForm from "./SBNavForm";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  justify-content: flex-end;
  padding: 0.1rem 0.1rem 0 0;
  gap: 0.2rem;
`;
const StyledButton = styled.button`
  display: flex;
  height: 1.425rem;
  width: 1.5rem;
  align-items: center;
  &:hover {
    border: 0.1rem solid;
  }
`;

export default function SBNav({ setEditing }) {
  const [adding, setAdding] = useState(false);
  return (
    <div>
      {adding && <SBNavForm setAdding={setAdding} />}
      {!adding && (
        <StyledMain>
          <StyledButton onClick={() => setAdding((x) => !x)}>
            <MdAdd />
          </StyledButton>
          <StyledButton onClick={() => setEditing((x) => !x)}>
            <MdEdit />
          </StyledButton>
        </StyledMain>
      )}
    </div>
  );
}
