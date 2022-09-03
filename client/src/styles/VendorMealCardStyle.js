import styled from "styled-components";

export const VendorMealCardStyle = styled.div`
  width: 350px;
  height: 300px;
  background-color: transparent;
  border-radius: 10px;
  border: 1px dashed #f9975d;
  padding: 1rem 2rem;
  transition: ease-in-out 0.15s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

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
  h3 {
    margin: 0.3rem 0 0 0;
  }

  .meal-image {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
  }

  .description {
    text-align: center;
  }

  .actn {
    display: flex;
    gap: 2rem;
  }

  .btn {
    padding: 0.5rem 1rem;
    border-radius: 0.7rem;
    transition: ease-in-out 0.15s;
  }

  .edit-btn {
    background-color: #fbd148;
  }
  .cancel-btn {
    background-color: #c85c5c;
  }
`;
