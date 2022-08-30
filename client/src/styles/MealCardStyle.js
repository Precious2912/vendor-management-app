import styled from "styled-components";

export const MealCardStyle = styled.div`
  width: 350px;
  height: 220px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px dashed #f9975d;
  padding: 1rem 2rem;

  :hover {
    /* border: 1px solid red; */
  }

  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .image-and-select {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .meal-image {
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  .select-btn {
    background-color: #b2ea70;
    padding: 0.5rem 1rem;
    border-radius: 0.7rem;
    transition: ease-in-out 0.15s;
  }

  .select-btn:hover {
    background-color: #fbd148;
  }
`;
