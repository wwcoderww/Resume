import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border-bottom: 1px solid;
  padding: 0.25rem;
  display: flex;
  gap: 1rem;
`;
const StyledSeperator = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export default function Form() {
  return (
    <StyledForm>
      <StyledSeperator>
        <label htmlFor="itemName">Name:</label>
        <input type="text" />
      </StyledSeperator>
      <StyledSeperator>
        <label htmlFor="budgeted">Budget:</label>
        <input type="number" placeholder="0" />
      </StyledSeperator>
      <StyledSeperator>
        <label htmlFor="catagory">Catagory:</label>
        <select name="catagory" id="catagory">
          <option value="uncatagorized">UnCatagorized</option>
        </select>
      </StyledSeperator>
    </StyledForm>
  );
}
