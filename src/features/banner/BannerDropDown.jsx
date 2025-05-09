import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  z-index: 1000;
  right: 0;
  background-color: var(--main-background-color);
  padding: 1rem 0 5rem 0;
`;

export default function BannerDropDown({ MainContentRef }) {
  const startLocation = MainContentRef.current.getBoundingClientRect().y;

  //   const mainContentCords = MainContentRef.content.getBoundindClientRef();
  return (
    <StyledContainer style={{ top: `${startLocation}px` }}>
      BannerDropDownaaaaaaaaaaaaa
    </StyledContainer>
  );
}
