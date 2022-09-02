import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%;
  height: 100%; */
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  form div {
    margin-bottom: 2rem;
  }

  .input {
    display: flex;
    flex-direction: column;
  }

  .modal-content {
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    width: 30%;
    height: 85%;
    display: flex;
    flex-direction: column;
  }

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close {
    cursor: pointer;
  }

  .submit-btn {
    background-color: #fbd148;
    padding: 0.5rem 1rem;
    border-radius: 0.7rem;
    transition: ease-in-out 0.15s;
  }

  .submit-btn:hover {
    opacity: 0.8;
  }

  .submit-btn:active {
    opacity: 0.6;
  }

  .action-btns {
    display: flex;
  }
`;
