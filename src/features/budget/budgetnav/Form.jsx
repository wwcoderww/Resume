import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import postItem from "../usePostItem";

const StyledForm = styled.form`
  border-bottom: 1px solid;
  padding: 0.25rem;
  display: flex;
  gap: 1rem;
`;
const StyledSeperator = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export default function Form() {
  const { register, handleSubmit, getValues } = useForm();
  const mutate = postItem();
  function formSubmit() {
    const newItem = {
      ...getValues(),
      spent: 0,
      budgeted: Number(getValues().budgeted),
      available: Number(getValues().budgeted),
    };
    mutate(newItem);
  }
  return (
    <StyledForm onSubmit={handleSubmit(formSubmit)}>
      <StyledSeperator>
        <label htmlFor="itemName">Name:</label>
        <input type="text" required {...register("name")} />
      </StyledSeperator>
      <StyledSeperator>
        <label htmlFor="budgeted">Budget:</label>
        <input
          type="number"
          placeholder="0"
          defaultValue={0}
          {...register("budgeted")}
        />
      </StyledSeperator>
      <StyledSeperator>
        <label htmlFor="catagory">Catagory:</label>
        <select name="catagory" id="catagory" {...register("catagory")}>
          <option value="uncatagorized">UnCatagorized</option>
        </select>
      </StyledSeperator>
      <StyledSeperator>
        <button>Add</button>
      </StyledSeperator>
    </StyledForm>
  );
}
