import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/login";
import Forget from "../pages/Auth/forget";
import Signup from "../pages/Auth/signup";
import Dashboard from "../pages/Dashboard";
import Messages from "../pages/Messages";
import Reels from "../pages/Reels";
import Explore from "../pages/Explore";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";

import { getFromPersistance } from "../utils/utils";

const Router = () => {
  let isAuthenticated = getFromPersistance("auth_token");

  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      {/* <Route path="/signup" element={<Signup />} /> */}
      {/* <Route path="/forget" element={<Forget />} /> */}

      {/* <Route path="/Home" element={<Dashboard />} /> */}
      {/* <PrivateRoutes path="/Home">
        <Dashboard />
      </PrivateRoutes> */}
      {/* <PrivateRoutes path="/Home" element={<Dashboard/>} /> */}
      {/* <PrivateRoutes path="/Home" element={Dashboard} /> */}
      <Route
        path="/Home"
        element={
          <PrivateRoutes
            Component={Dashboard}
            isAuthenticated={isAuthenticated}
          />
        }
      />

      <Route path="/" element={<PublicRoutes Component={Login} />} />
      <Route path="/login" element={<PublicRoutes Component={Login} />} />
      <Route path="/signup" element={<PublicRoutes Component={Signup} />} />
      <Route path="/forget" element={<PublicRoutes Component={Forget} />} />

      <Route path="/Explore" element={<Explore />} />
      <Route path="/Reels" element={<Reels />} />
      <Route path="/Messages" element={<Messages />} />
    </Routes>
  );
};
export default Router;
