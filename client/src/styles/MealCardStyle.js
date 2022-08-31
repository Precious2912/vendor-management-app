import styled from "styled-components";

export const MealCardStyle = styled.div`
  width: 350px;
  height: 220px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px dashed #f9975d;
  padding: 1rem 2rem;
  transition: ease-in-out 0.15s;
  cursor: pointer;

  :hover {
    box-shadow: -1px 1px 11px -1px rgba(249, 151, 93, 0.75);
    -webkit-box-shadow: -1px 1px 11px -1px rgba(249, 151, 93, 0.75);
    -moz-box-shadow: -1px 1px 11px -1px rgba(249, 151, 93, 0.75);
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

  button:disabled,
  button[disabled] {
    /* border: 1px solid red; */
    background-color: #cccccc;
    color: #666666;
  }
  button:disabled:hover {
    background-color: #cccccc;
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
    object-fit: cover;
    object-position: center;
  }

  .select-btn {
    background-color: #fbd148;
    padding: 0.5rem 1rem;
    border-radius: 0.7rem;
    transition: ease-in-out 0.15s;
  }

  .select-btn:hover {
    background-color: #b2ea70;
  }
`;
