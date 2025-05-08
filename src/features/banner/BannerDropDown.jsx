import React from "react";
import { MdMenu } from "react-icons/md";
import styled from "styled-components";

const StyledIcon = styled.button`
  font-size: 2.3rem;
  align-self: center;
  border: none;
`;

export default function BannerDropDown() {
  return (
    <StyledIcon>
      <MdMenu />
    </StyledIcon>
  );
}
