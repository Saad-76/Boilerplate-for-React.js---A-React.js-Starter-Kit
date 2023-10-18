// import React from "react";
// import { Route } from "react-router-dom";
// import { getFromPersistance } from "../utils/utils";
// import { useNavigate } from "react-router-dom";

// const PrivateRoutes = ({ element: Element, ...rest }) => {
//   console.log(Element, "Element");

//   const navigate = useNavigate();

//   let token = getFromPersistance("auth_token");

//   if (!token) {
//     navigate("/", { replace: true });
//     return null;
//   }

//   return <Element {...rest} />;
// };
// export default PrivateRoutes;

import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ Component, isAuthenticated }) => {
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};
export default PrivateRoutes;
