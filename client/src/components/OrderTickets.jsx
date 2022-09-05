import React, { useState } from "react";
import { useEffect } from "react";
import axios from "../api/axios";
import { OrderTicketStyle } from "../styles/OrderTicketStyle";

const OrderTickets = ({ order }) => {
  const [meal, setMeal] = useState({});

  useEffect(() => {
    axios.get(`/users/getOneMeal/${order.foodId}`).then((res) => {
      //   console.log(res.data.record);
      setMeal(res.data.record);
    });
  }, []);

  const dateCreated = new Date(order.createdAt);
  return (
    <OrderTicketStyle>
      <p>
        Meal Name: <span>{meal.name}</span>{" "}
      </p>
      <p>
        Meal Category: <span>{meal.category}</span>{" "}
      </p>
      <p>
        Order ID: <span>{order.id}</span>
      </p>
      <p>
        Time Ordered: <span>{dateCreated.toLocaleString()}</span>
      </p>
    </OrderTicketStyle>
  );
};

export default OrderTickets;

// /users/getOneMeal/:id
