import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../hooks/UseAuth";

export const ProtectedRoute = () => {
  const location = useLocation();
  //   const { loggedIn } = UseAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

// export const VendorProtect = () => {
//   const location = useLocation();
//   const role = JSON.parse(localStorage.getItem("role"));

//   return role === "vendor" ? (
//     <Outlet />
//   ) : (
//     <Navigate to="vendor/login" state={{ from: location }} replace />
//   );
// };
