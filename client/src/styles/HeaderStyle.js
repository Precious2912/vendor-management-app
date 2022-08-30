import styled from "styled-components";

export const HeaderStyle = styled.header`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  border-bottom: 1px solid #4d4d4d;

  & input {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
  }

  .search {
    background-color: #e6e6e6;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #643c25;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }
`;
