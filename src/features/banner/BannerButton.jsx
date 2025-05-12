import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import styled from "styled-components";
import BannerDropDown from "./BannerDropDown";

const StyledIcon = styled.button`
  font-size: 2.3rem;
  align-self: center;
  border: none;
  background-color: var(--main-color);
`;

export default function BannerButton() {
  const [toggleMenu, setToggleMenu] = useState(false);
  function handleClick() {
    setToggleMenu((x) => !x);
  }
  return (
    <>
      <StyledIcon onClick={() => handleClick()}>
        <MdMenu />
      </StyledIcon>
      {toggleMenu && <BannerDropDown />}
    </>
  );
}
