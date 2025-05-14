import React from "react";
import styled from "styled-components";
import loadBudget from "../useGetBudget";
import currencyConvert from "../../../util/currencyConverter";

const StyledMain = styled.div`
  border-bottom: 0.1rem solid;
  display: flex;
  justify-content: center;
  gap: 8rem;
  font-size: 1.1rem;
  padding: 0.3rem;
`;

export default function Stats() {
  const data = loadBudget();
  return (
    <StyledMain>
      {data && (
        <>
          <div>Remaining To Budget: {currencyConvert(data[0].unBudgeted)}</div>
          <div>Total Budget This Week: {currencyConvert(data[0].budgeted)}</div>
        </>
      )}
    </StyledMain>
  );
}
