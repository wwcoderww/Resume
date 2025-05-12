import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  border-bottom: 0.1rem solid;
  display: flex;
  justify-content: center;
  gap: 8rem;
  font-size: 1.1rem;
  padding: 0.3rem;
`;

export default function Stats() {
  return (
    <StyledMain>
      <div>Remaining To Budget: $0</div>
      <div>Total Budget This Week: $500</div>
    </StyledMain>
  );
}
