import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import DateNow from "../components/DateNow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProductDetailStyle } from "../styles/ProductDetailStyle";

const EditMealPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  console.log(product);
  useEffect(() => {
    axios.get(`/users/getOneMeal/${id}`).then((res) => {
      setProduct(res.data.record);
    });
  }, []);

  return (
    <>
      <Header />
      <DateNow />
      <form action="">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          value={product.name}
          name="name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <label htmlFor="description">Meal Description</label>
        <input
          type="text"
          value={product.description}
          name="description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />

        <label htmlFor="price">Meal Price</label>
        <input
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <label htmlFor="image">Meal Image</label>
        <input
          type="text"
          value={product.image}
          name="image"
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <button
          onClick={() => {
            axios.patch(`/users/updateMeal/${id}`, product).then((res) => {
              console.log(res);
            });
            navigate("/vendor/dashboard");
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            navigate("/vendor/dashboard");
          }}
        >
          Go Back
        </button>
      </form>
      <Footer />
    </>
  );
};

export default EditMealPage;
