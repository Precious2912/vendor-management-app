import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "../api/axios";
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
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios
      .get("/admin/getAllVendors")
      .then((res) => {
        // console.log(res);
        setVendors(res.data.record);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log({ vendors });

  return (
    <>
      <Header admin />
      <FilterToggle admin />
      <DateNow />
      {vendorActive && <h1>Vendor</h1>}
      {userActive && <h1>User</h1>}
      {commentActive && <h1>Comment</h1>}
      <Footer />
    </>
  );
};

// /admin/getAllVendors
