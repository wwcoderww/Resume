import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
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

export default function ItemButtons() {
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleDel, setToggleDel] = useState(false);
  function handleAdd() {
    setToggleAdd((x) => !x);
    setToggleDel(false);
  }
  function handleDel() {
    setToggleDel((x) => !x);
    setToggleAdd(false);
  }
  return (
    <MainContainer>
      {toggleAdd && (
        <ItemInput
          autoFocus
          placeholder="0"
          onBlur={() => handleAdd()}
        ></ItemInput>
      )}
      <div>
        <ItemButton onClick={() => handleAdd()}>➕</ItemButton>
        <ItemButton onClick={() => handleDel()}>➖</ItemButton>
      </div>
      {toggleDel && (
        <ItemInput
          autoFocus
          placeholder="0"
          onBlur={() => handleDel()}
        ></ItemInput>
      )}
    </MainContainer>
  );
}
