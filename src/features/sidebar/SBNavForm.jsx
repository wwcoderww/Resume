import { MdAdd, MdOutlineCancel } from "react-icons/md";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAddBookmark } from "./useAddBookmark";

// Style Components
const Main = styled.main`
  padding: 0.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonDiv2 = styled.div`
  display: flex;
  gap: 0.2rem;
`;

export default function SBNavForm({ setAdding }) {
  const { register, handleSubmit, reset, getValues } = useForm();
  const mutate = useAddBookmark();
  // Form Handling Functions
  function onSuccess() {
    mutate(getValues());
    reset();
    setAdding((x) => !x);
  }
  function onError(errors) {
    console.log(errors);
    alert(`Invalid Inputs`);
  }
  // Cancel Button
  function onCancel() {
    reset();
    setAdding((x) => !x);
  }
  return (
    <form onSubmit={handleSubmit(onSuccess, onError)}>
      <Main>
        <ButtonDiv>
          <label htmlFor="url">URL</label>
          <ButtonDiv2>
            <button>
              <MdAdd />
            </button>
            <button onClick={() => onCancel()}>
              <MdOutlineCancel />
            </button>
          </ButtonDiv2>
        </ButtonDiv>
        <input type="text" name="url" {...register("url")} />
        <label htmlFor="name">Label</label>
        <input type="text" name="name" {...register("name")} />
      </Main>
    </form>
  );
}
