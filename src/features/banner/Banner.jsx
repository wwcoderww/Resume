import React from "react";
import BannerOption from "./BannerOption";
import styled from "styled-components";
import BannerDropDown from "./BannerDropDown";

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
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
      <BannerDropDown />
    </StyledMain>
  );
}
