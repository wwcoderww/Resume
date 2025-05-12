import React from "react";
import BannerOption from "./BannerOption";
import styled from "styled-components";
import BannerButton from "./BannerButton";

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  background-color: var(--main-color);
`;
const BannerContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: scroll;
`;

export default function Banner() {
  return (
    <StyledMain>
      <BannerContainer>
        <BannerOption />
        <BannerOption />
        <BannerOption />
        <BannerOption />
      </BannerContainer>
      <BannerButton />
    </StyledMain>
  );
}
