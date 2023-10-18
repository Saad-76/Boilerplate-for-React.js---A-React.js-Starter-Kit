// import React from "react";
// import { Route } from "react-router-dom";
// import { getFromPersistance } from "../utils/utils";
// import { Navigate } from "react-router-dom";

// const PublicRoute = (props) => {
//   const token = getFromPersistance("auth_token");

//   if (!token) {
//     return <Route {...props}>{props.children}</Route>;
//   }
//   return <Navigate replace to="/" />;
// };
// export default PublicRoute;
const PublicRoutes = ({ Component }) => {
  return <Component />;
};
export default PublicRoutes;
