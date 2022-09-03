import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import DateNow from "../components/DateNow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductDetailStyle } from "../styles/ProductDetailStyle";
import { PaystackButton } from "react-paystack";
import { PaysackModalState } from "../atoms/PayStackModalAtom";
import { useRecoilState } from "recoil";
import { AiOutlineClose } from "react-icons/ai";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formActive, setFormActive] = useRecoilState(PaysackModalState);
  const navigate = useNavigate();

  const publicKey = "pk_test_6cd7dc181e5cdc9a9a8247231b880642aaf6fd59";

  const componentProps = {
    email: email,
    amount: product.price * 100,
    metadata: {
      name: name,
      phone: phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const { id } = useParams();
  useEffect(() => {
    axios.get(`/users/getOneMeal/${id}`).then((res) => {
      setProduct(res.data.record);
    });
  }, []);

  return (
    <>
      <Header />
      <DateNow />
      <ProductDetailStyle className="product-container">
        <h3>{product.name}</h3>
        <img
          className="product-image"
          src={product.image}
          alt={product.description}
        />
        <p className="product-description">{product.description}</p>
        {product.premium && (
          <div className="price">
            <strong>Price: </strong>
            <p className="price">₦{product.price}</p>
          </div>
        )}

        <div className="actions">
          {product.premium && (
            <button
              className="btn confirm"
              onClick={() => {
                setFormActive(true);
              }}
            >
              Buy This Meal
            </button>
          )}
          {!product.premium && (
            <button className="btn confirm">Book Your meal</button>
          )}
          <button
            className="btn cancel"
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Menus
          </button>
        </div>
        {formActive && (
          <div className="paystack-modal">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <PaystackButton className="paystack-button" {...componentProps} />
            <AiOutlineClose
              color={"#cf1919"}
              size={35}
              onClick={() => {
                setFormActive(false);
              }}
              className="close"
            />
          </div>
        )}
      </ProductDetailStyle>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
