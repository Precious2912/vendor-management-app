import React from "react";
import DateNow from "../components/DateNow";
import FilterToggle from "../components/FilterToggle";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
import Header from "../components/Header";

const VendorDashboardPage = () => {
  return (
    <>
      <Header vendor />
      <DateNow />
      <FilterToggle vendor />
      <FoodList />
      <Footer />
    </>
  );
};

export default VendorDashboardPage;
