import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "../api/axios";
import { editPageActiveState } from "../atoms/editPageAtom";
import DateNow from "../components/DateNow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { EditMealPageStyle } from "../styles/EditMealPage";
import { ProductDetailStyle } from "../styles/ProductDetailStyle";

const EditMealPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [editActive, setEditActive] = useRecoilState(editPageActiveState);

  let reqBody = {
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
  };
  //   const [reqBody, setReqBody] = useState({
  //     name: product.name,
  //     description: product.description,
  //     price: product.price,
  //     image: product.image,
  //   });

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
      <EditMealPageStyle>
        <form>
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
            type="submit"
            onSubmit={() => {
              axios
                .post(`/vendors/updatemenu/${id}`, reqBody)
                .then((res) => {})
                .catch((err) => {
                  console.log(err);
                });
              navigate("/vendor/dashboard");
              setEditActive(false);
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
      </EditMealPageStyle>

      <Footer />
    </>
  );
};

export default EditMealPage;