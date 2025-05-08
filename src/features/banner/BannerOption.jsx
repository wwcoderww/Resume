import React from "react";
import styled from "styled-components";

const BannerOptionStyle = styled.div`
  border: 1px solid black;
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
  padding: 0.5rem;
  flex: 1;
`;

export default function BannerOption() {
  return <BannerOptionStyle>BannerOption</BannerOptionStyle>;
}
