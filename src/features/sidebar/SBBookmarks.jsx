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
  padding: 0.4rem 0.1rem 0.4rem 1rem;
  display: flex;
  justify-content: space-between;
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
          <Li key={bookMark.name}>
            <div>
              <a href={bookMark.url} target="_blank">
                {bookMark.name}
              </a>
            </div>
            {editing && (
              <button onClick={() => handleDelete(bookMark.id)}>
                <MdDelete />
              </button>
            )}
          </Li>
        ))}
    </StyledUl>
  );
}
