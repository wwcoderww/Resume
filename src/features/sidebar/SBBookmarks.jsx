import React from "react";
import styled from "styled-components";
import { useBookmarks } from "./useBookmarks";
import { MdDelete } from "react-icons/md";
import useDeleteBookmark from "./useDeleteBookmark";

// Styled Components
const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const Li = styled.li`
  padding: 0.4rem 0.2rem 0.4rem 0.2rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.05rem;
`;
const StyledDivider = styled.div`
  content: "";
  border-bottom: 0.1rem solid;
  width: 95%;
  margin: 0 auto;
`;

export default function SBBookmarks({ editing }) {
  const { data, isLoading } = useBookmarks();
  const mutate = useDeleteBookmark();
  function handleDelete(id) {
    mutate(id);
  }
  return (
    <StyledUl>
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        data.map((bookMark) => (
          <>
            <Li key={bookMark.name}>
              <div>
                <a href={bookMark.url} target="_self">
                  {bookMark.name}
                </a>
              </div>
              {editing && (
                <button onClick={() => handleDelete(bookMark.id)}>
                  <MdDelete />
                </button>
              )}
            </Li>
            <StyledDivider />
          </>
        ))}
    </StyledUl>
  );
}
