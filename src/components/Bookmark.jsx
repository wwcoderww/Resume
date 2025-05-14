import React from "react";
import styled from "styled-components";

const StyledLI = styled.li`
  list-style: none;
  cursor: pointer;
`;

export default function Bookmark({ children, link }) {
  return (
    <>
      <StyledLI>
        <a href={link} target="_self">
          {children}
        </a>
      </StyledLI>
    </>
  );
}
