import styled from "styled-components";

export const ProductDetailStyle = styled.div`
  /* width: 450px; */
  /* height: 450px; */
  margin: 0 auto;
  background-color: transparent;
  border-radius: 10px;
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  h3 {
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0;
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

  .product-image {
    width: 400px;
    height: 330px;
    object-fit: cover;
    margin: 0 0 1rem 0;
    box-shadow: -2px 1px 11px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -2px 1px 11px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -2px 1px 11px 0px rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    cursor: pointer;
  }

  .price {
    display: flex;
    gap: 1rem;
  }

  .product-description {
    text-align: center;
    margin: 0 0 1rem 0;
  }

  .price {
    font-size: 1.2rem;
    font-weight: 600;
    color: #c85c5c;
    margin: 0 0 1rem 0;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 1px solid #f9975d;
    transition: ease-in-out 0.15s;
    /* background-color: #f9975d; */
  }

  .btn:hover {
    background-color: #f9975d;
  }

  .paystack-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
`;
