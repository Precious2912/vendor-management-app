import React from "react";
import { useRecoilState } from "recoil";
import { commentsState, userState, vendorsState } from "../atoms/adminAtom";
// import { Admin } from "../components/Admin";
import DateNow from "../components/DateNow";
import FilterToggle from "../components/FilterToggle";

import Footer from "../components/Footer";
import Header from "../components/Header";

export const AdminDashboard = () => {
  const [vendorActive, setVendorActive] = useRecoilState(vendorsState);
  const [userActive, setUserActive] = useRecoilState(userState);
  const [commentActive, setCommentActive] = useRecoilState(commentsState);
  return (
    <>
      <Header admin />
      <FilterToggle admin />
      <DateNow />
      <Footer />
    </>
  );
};
