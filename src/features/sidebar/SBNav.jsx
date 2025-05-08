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

export default function SBNav({ setEditing }) {
  const [adding, setAdding] = useState(false);
  return (
    <div>
      {adding && <SBNavForm setAdding={setAdding} />}
      {!adding && (
        <StyledMain>
          <button onClick={() => setAdding((x) => !x)}>
            <MdAdd />
          </button>
          <button onClick={() => setEditing((x) => !x)}>
            <MdEdit />
          </button>
        </StyledMain>
      )}
    </div>
  );
}
