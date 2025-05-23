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
        <Bookmark link={"https://www.theodinproject.com/dashboard"}>
          The Odin Project
        </Bookmark>
        <Bookmark link={"https://react.dev/"}>React Docs</Bookmark>
        <Bookmark link={"https://tailwindcss.com/"}>Tailwind</Bookmark>
      </StyledUl>
      <StyledUl>
        <Bookmark link={"https://verified.capitalone.com/auth/signin"}>
          Capital One
        </Bookmark>
        <Bookmark link={"https://voice.google.com/u/0/messages"}>
          Google Voice
        </Bookmark>
      </StyledUl>
    </MainContainer>
  );
}
