import React from "react";
import styled from "styled-components";
import Bookmark from "../../components/Bookmark";

const MainContainer = styled.div`
  display: flex;
  padding: 0.5rem;
`;

const StyledUl = styled.ul`
  width: 12rem;
  margin: 0;
  padding: 0;
`;

export default function MoreBookmarks() {
  return (
    <MainContainer>
      <StyledUl>
        <Bookmark link={"https://react.dev/"}>React Docs</Bookmark>
        <Bookmark link={"https://tailwindcss.com/"}>Tailwind</Bookmark>
      </StyledUl>
      <StyledUl>
        <Bookmark>Aa</Bookmark>
      </StyledUl>
    </MainContainer>
  );
}
