import React, { useState } from "react";
import styled from "styled-components";
import SBNav from "./SBNav";
import SBBookmarks from "./SBBookmarks";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  background-color: blue;
  height: 100%;
`;

export default function Sidebar() {
  const [editing, setEditing] = useState(false);
  return (
    <MainDiv>
      <SBNav setEditing={setEditing} />
      <SBBookmarks editing={editing} />
    </MainDiv>
  );
}
